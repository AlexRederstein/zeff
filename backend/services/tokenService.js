const jwt = require("jsonwebtoken");
const { Token } = require("../connect")

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "30m",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "30d",
    });
    return { accessToken, refreshToken }
  }

  async safeToken(userid, refreshToken) {
    const tokenData = await Token.findOne({ user: userid });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await Token.create({ user: userid, refreshToken });
    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await Token.destroy({where: {refreshToken}})
    return tokenData;
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_SECRET_KEY)
      return userData
    } catch(e) {
      return null
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_SECRET_KEY)
      return userData
    } catch(e) {
      return null
    }
  }

  async findToken(refreshToken) {
    const tokenData = await Token.findOne({where: {refreshToken}})
    return tokenData;
  }
}

module.exports = new TokenService();
