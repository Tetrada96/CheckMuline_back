module.exports = app => {
  const user = require("../controllers/user.controller.js");
  const color = require("../controllers/color.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", user.create);

  // Retrieve all Tutorials
  router.get("/", user.findAll);

  router.get(`/:userId/colors`, color.findAll );

  router.put(`/:userId/colors/:colorId`, color.changeColorCount);

  router.post(`/:userId/colors`, color.checkColors);

  app.use('/api/users', router);
};