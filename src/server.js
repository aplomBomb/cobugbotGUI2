const express = require('express');
const path = require('path');
const uuid = require('uuid/v4')
const app = express();
const session = require('express-session')
const FileStore = require('session-file-store')(session);


// add & configure middleware
app.use(session({
  genid: (req) => {
    console.log('Inside the session middleware')
    console.log(req.sessionID)
    return uuid() // use UUIDs for session IDs
  },
  store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.get('/', function (req, res) {
  console.log(req)
  const uniqueId = uuid()
  res.send(`Here's a unique UUID: ${uniqueId}`)
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT || 8080}`)
});