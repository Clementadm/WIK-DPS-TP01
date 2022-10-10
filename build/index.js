"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('Hello world')
const express_1 = __importDefault(require("express"));
const dotenv = require("dotenv");
const app = (0, express_1.default)();
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
