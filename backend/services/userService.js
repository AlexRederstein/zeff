const { User } = require('../connect')
const bcrypt = require('bcrypt')
const tokenService = require('../services/tokenService');
const mailService = require('./mailService')
const UserDTO = require('../DTOs/user')
const uuid = require('uuid') 
const ApiError = require('../exceptions/api-error')
require("dotenv").config();


class userService {
    async login(data) {
        const user = await User.findOne({where: {email: data.email}})
        if(!user) {
            throw ApiError.badRequest('Пользователь не был найден!')
        }
        const isPassEquals = await bcrypt.compare(data.password, user.password)
        if(!isPassEquals) {
            throw ApiError.badRequest('Неверный пароль!')
        }
        const userData = new UserDTO(user)
        const tokens = tokenService.generateTokens({...userData})
        await tokenService.safeToken(userData.userid, tokens.refreshToken)

        return {user: userData, ...tokens}

    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async registration(data) {

        const candidate = await User.findOne({where: {email: data.email}})
        if (candidate) {
            throw ApiError.badRequest("Такой пользователь уже существует!")
        }

        const password = await bcrypt.hash(data.password, Number(process.env.BCRYPT_HASH))

        data.password = password
        const activationLink = uuid.v4()
        const user = await User.create({...data, activationLink})

        await mailService.sendActivationMail(data.email, `${process.env.SERVER_URL}/activate/${activationLink}`)

        const userData = new UserDTO(user)
        const tokens = await tokenService.generateTokens({...userData})
        await tokenService.safeToken(userData.userid, tokens.refreshToken)
        return {user: userData, ...tokens}
    }

    async activate(activationLink) {
        const user = await User.findOne({activationLink})
        if(!user) {
            throw ApiError.badRequest('Неккоректная ссылка активации')
        }
        user.isActivated = true
        await user.save()
    }

    async refresh(refreshToken){
        if(!refreshToken) {
            throw ApiError.UnathorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromBD = tokenService.findToken(refreshToken)
        if(!userData || !tokenFromBD) {
            throw ApiError.UnathorizedError()
        }

        const user = await User.findOne({where: {userid: userData.userid}})
        const userDto = new UserDTO(user)
        const tokens = tokenService.generateTokens({...userDto})

        await tokenService.safeToken(userDto.userid, tokens.refreshToken)
        return {...tokens, user: userDto}
    }
}

module.exports = new userService()