const noDBService = require("../services/noDBService");

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
      res.cookie("refreshToken", user.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      req.json(user);
    }
  }
}

module.exports = new userController();
