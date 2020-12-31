const { adminLogin } = require("./admin.controller");

const route = require("express").Router();

route.post("/",adminLogin);

module.exports = route;