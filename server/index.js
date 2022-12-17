require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const cors = require("cors");
const path = require("path");
const sequelize = require("./db");
const router = require("./controllers");
const consultantData = require("./static/consultant.json");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "static")));
app.use("/api", router);

const token = process.env.TOKEN;
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    //const webAppUrl = 'https://ornate-selkie-c27577.netlify.app';
    const bot = new TelegramBot(token, { polling: true });

    bot.on("message", async (msg) => {
      const chatId = msg.chat.id;
      const text = msg.text;

      if (text === "/start") {
        await bot.sendMessage(chatId, "Выбери опцию", {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Пройти обучение",
                  web_app: { url: "https://google.com" },
                },
              ],
              [{ text: "Скачать схему", callback_data: "scheme" }],
              [{ text: "Получить мем", callback_data: "meme" }],
              [
                {
                  text: `Написать карьерному коучу (${consultantData.name})`,
                  url: consultantData.link,
                },
              ],
            ],
          },
        });
      }
    });

    bot.on("callback_query", async (msg) => {
      const chatId = msg.message?.chat.id;
      if (!chatId) return;
      if (msg.data === "scheme") {
        await bot.sendMessage(chatId, "Отправляю Вашу схему!");
        return bot.sendDocument(chatId, "./static/document.pdf");
      }

      if (msg.data === "meme") {
        await bot.sendMessage(chatId, "Лови мем!");
        return bot.sendPhoto(
          chatId,
          "https://sun6-20.userapi.com/impg/E38H04ZuX2jg422-kLBQ-Xqh2TyLCEL7SQ0Ocw/xKfosj4dGlU.jpg?size=599x1059&quality=95&sign=8d16578f6356461ab4b91ce7c2588562&c_uniq_tag=8SrkPDwrXg0UsTR3coc61G_9wVz2Nzi8nrlHG03G1qA&type=album"
        );
      }

      return bot.sendMessage(
        chatId,
        "Ваша команда не распознана, попробуйте еще раз!"
      );
    });

    app.listen(PORT, () => console.log("Running on port " + PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
