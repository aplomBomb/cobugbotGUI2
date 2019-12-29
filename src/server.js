const express = require("express");
const uuid = require("uuid/v4");
const app = express();
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const users = [
  { id: "2f24vvg", username: "halcyonbomb", password: "Ogy8vtgtld3" }
];

// configure passport.js to use the local strategy
passport.use(
  new LocalStrategy(
    { usernameField: "username" },
    (username, password, done) => {
      console.log("Inside local strategy callback");
      // here is where you make a call to the database
      // to find the user based on their username or email address
      // for now, we'll just pretend we found that it was users[0]
      const user = users[0];
      if (username === user.username && password === user.password) {
        console.log("Local strategy returned true");
        return done(null, user);
      }
    }
  )
);

// tell passport how to serialize the user
passport.serializeUser((user, done) => {
  console.log(
    "Inside serializeUser callback. User id is saved to the session file store here"
  );
  done(null, user.id);
});

// add & configure middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    genid: req => {
      console.log("Inside the session middleware");
      console.log("Created new session ID: ", req.sessionID);
      return uuid(); // use UUIDs for session IDs
    },
    store: new FileStore(),
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", function(req, res) {
  // console.log(req);
  const uniqueId = uuid();
  res.send(`Here's a unique UUID: ${uniqueId}`);
});

// create the login get and post routes
app.get("/login", (req, res) => {
  console.log("Inside GET /login callback function");
  console.log("Session ID: ", req.sessionID);
  res.send(`You got the login page!\n`);
});

app.post("/login", (req, res, next) => {
  console.log("Inside POST /login callback");
  passport.authenticate("local", (err, user, info) => {
    req.login(user, err => {
      return res.send("You were authenticated & logged in!\n");
    });
  })(req, res, next);
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT || 8080}`);
});
