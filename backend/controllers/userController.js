const noDBService = require("../models/noDBService");
const jwt = require("jsonwebtoken");

class userController {
  async login(req, res) {
    const data = {
      username: req.body.username,
      password: req.body.password,
    };

    if (Number(process.env.DB_real)) {
      // Обращение к базе данных
    } else {
      const user = await noDBService.login(data);
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
      });
      return res.json({ token, user: { name: user.name, login: user.login } });
    }
  }
}

module.exports = new userController();
