"use strict";

const express = require("express");
const app = express();
const PORT = 3000;
//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`)); // express.static built-in middleware -> To serve static files such as images, CSS files, and JavaScript files
app.use("/", home); // use -> 미들웨어를 등록해주는 메서드

module.exports = app;
