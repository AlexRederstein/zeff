const ApiError = require("../exceptions/api-error");
const noDBService = require("../services/noDBService");
const tokenService = require("../services/tokenService");
const userService = require("../services/userService");
const { validationResult } = require('express-validator')

class userController {
  async login(req, res) {
    const data = {
      email: req.body.email,
      password: req.body.password,
    };
    const user = await userService.login(data)
    res.cookie('refreshToken', user.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
    res.json(user)
  }

  async logout(req, res, next) {
    try {
      const {refreshToken} = req.cookies;
      const token = await userService.logout(refreshToken)
      res.clearCookie('refreshToken')
      return res.json(token)
    } catch (e) {
      next(e)
    }
  }

  async registration(req, res, next) {
    try {
      const errors = validationResult(req)
      if(!errors.isEmpty()) {
        return next(ApiError.badRequest('Ошибка при валидации', errors.array()))
      }
      const data = {
        name: req.body.name,
        lastname: req.body.lastname,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
      }
      const user = await userService.registration(data)
      
      res.cookie('refreshToken', user.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      res.json(user)
    } catch (e) {
      next(e)
    }

  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link
      await userService.activate(activationLink)
      return res.redirect(process.env.APP_URL)
    } catch (e) {
      next(e)
    }
  }

  async refresh(req, res, next) {
    try {
      const {refreshToken} = req.cookies
      const userData = await userService.refresh(refreshToken)
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

      return res.json(userData)
    } catch (e) {
      next(e)
    }
  }

  async getAllUsers(req, res, next) {
    res.json({message: "Ответ"})
  }
}

module.exports = new userController();
