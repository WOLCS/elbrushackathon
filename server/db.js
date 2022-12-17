// - текущий узел в БД
// - варианты выбора (ветвление)
// - меняем стейт на следующий узел, дергаем его из БД
// - так избегаем хардкода
// - так даем настраивать из админки

require("dotenv").config();
const { Sequelize } = require("sequelize");
const config = require("./config/config.json");
module.exports = new Sequelize(process.env.SEQUELIZE, {
  define: {
    timestamps: false,
  },
});
