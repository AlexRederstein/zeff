const Sequelize = require("sequelize");
require("dotenv").config();

const connect = new Sequelize({
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  schema: process.env.DB_SCHEMA,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const User = require('./models/User')(connect)
const Token = require('./models/Token')(connect)

const syncDB = async () => {
  await connect.sync();
};

async function testConnection() {
  try {
    await connect.authenticate();
    console.log('Подключение успешно установлено.');
  } catch (err) {
    console.error('Ошибка подключения:', err.message);
  } finally {
    connect.close()
  }
}

// testConnection()

syncDB();

module.exports = {
    User,
    Token
}