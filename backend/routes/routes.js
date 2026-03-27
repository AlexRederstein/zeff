const Router = require("express").Router;
const {body} = require('express-validator')
const authMiddleware = require("../middleware/api-middleware")

const router = new Router();

const userController = require("../controllers/userController");

router.get("/", (req, res) => {
  res.send("Привет, мир!");
});

router.post("/registration", 
  body('email').isEmail(), 
  body('password').isLength({min: 3, max: 10}),
  userController.registration);

router.post("/login", userController.login);
router.post("/logout", userController.logout)
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh)
router.get("/users", authMiddleware, userController.getAllUsers)


module.exports = router;
 