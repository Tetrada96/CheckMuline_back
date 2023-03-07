module.exports = app => {
  const color = require("../controllers/color.controller.js");

  var router = require("express").Router();

  // Retrieve all Tutorials
  // router.get("/", color.findOne);

  router.get("/", color.findAll);

  app.use('/api/muline', router);
};