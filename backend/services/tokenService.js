const jwt = require("jsonwebtoken");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "30m",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "30d",
    });
  }

  async safeToken(userid, refreshToken) {
    const tokenData = await tokenModel.findOne({ user: userid });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await tokenModel.create({ user: userid, refreshToken });
    return token;
  }
}

module.exports = new TokenService();
