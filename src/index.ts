// console.log('Hello world')
import express from "express";
const dotenv = require("dotenv");
const app = express();

// variable d'environnement
dotenv.config();
const myPort = process.env.PING_LISTEN_PORT;

//parse every url
app.get("*", (req, res) => {
  // check if ping return headers else no data (error 404)
  if (req.url == "/ping") {
    return res.json(req.headers);
  }
  res.status(404).end();
});

// run the app on the env variable
app.listen(myPort, () => {
  console.log("The application is listening on the env port!");
});
