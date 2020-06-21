require('dotenv').config()
const massive = require('massive'),
  express = require('express'),
  app = express(),
  session = require('express-session'),
  { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env

app.use(express.json())

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))


massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set('db', db)
  console.log("DB connected!")
}).catch(error => {
  console.log(error)
})


app.listen(SERVER_PORT, () => { console.log(`Prancing and Dancing on port ${SERVER_PORT}`) })
