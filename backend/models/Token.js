const { DataTypes } = require("sequelize");

module.exports = function (connect) {
  return connect.define("Token", {
    user: {
      type: DataTypes.UUID,
      references: { model: "Users", key: "userid" },
    },
    refreshToken: { type: DataTypes.TEXT, allowNull: false },
  });
};