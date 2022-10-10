// console.log('Hello world')
import express from "express";
import { hasUncaughtExceptionCaptureCallback } from "process";

const app = express();

let PING_LISTEN_PORT = 3333;

app.get("*", (req, res) => {
  console.log(res.status);
  if (req.url == "/ping") {
    console.log(1);
    // return res.json(JSON.stringify(req.headers));
    return res.json(req.headers);
  }
  res.status(404).end();
  console.log(2);
});

app.listen(3333, () => {
  console.log("The application is listening on port 3333!");
});
