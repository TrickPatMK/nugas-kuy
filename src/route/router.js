const express = require("express");
const app = express();

export default function myRouter() {
  app.get("/", (req, res) => {
    res.send("YOHO");
  });
}
