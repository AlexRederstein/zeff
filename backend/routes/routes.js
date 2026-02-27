const Router = require("express").Router;

const router = new Router();

const userController = require("../controllers/userController");

router.get("/", (req, res) => {
  res.send("Привет, мир!");
});

router.post("/login", userController.login);

module.exports = router;
