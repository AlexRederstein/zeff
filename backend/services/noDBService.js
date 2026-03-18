const TokenService = require("../services/tokenService");
const UserDTO = require("../DTOs/user");

class noDBService {
  async login(data) {
    const { username, password } = data;

    if (username == "ivan@mail.ru" && password == "123") {
      const user = {
        id: "123",
        lastname: "Иванов",
        name: "Иван",
        surename: "Иванович",
        nickname: "Ivan",
        login: "ivan@mail.ru",
        date_of_birth: "1998-12-17",
        country: "Russia",
        role: "user",
        avatar: null,
        registration_date: "2026-02-18",
      };

      const userData = new UserDTO(user);
      const tokens = TokenService.generateTokens({ ...userData });
      return { ...tokens, user: userData };
    } else {
      throw new Error("Данные неверны");
    }
  }
}

module.exports = new noDBService();
