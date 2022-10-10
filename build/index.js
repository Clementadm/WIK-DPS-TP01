"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('Hello world')
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let PING_LISTEN_PORT = 3333;
app.get("*", (req, res) => {
    console.log(res.status);
    if (req.url == "/ping") {
        console.log(1);
        return res.json(JSON.stringify(req.headers));
    }
    res.status(404).end();
    console.log(2);
});
app.listen(3333, () => {
    console.log("The application is listening on port 3333!");
});
