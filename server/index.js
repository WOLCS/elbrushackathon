require("dotenv").config();
require("pg");
const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const cors = require("cors");
const path = require("path");
const sequelize = require("./db");
const router = require("./controllers");
const consultantData = require("./static/consultant.json");
const bodyParser = require("body-parser");
const errorHandler = require("./error/error-handler");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "static")));
app.use("/api", router);
app.use(errorHandler);

const token = process.env.TOKEN;
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    const webAppUrl = "https://elbrushackathon.vercel.app";
    const bot = new TelegramBot(token, { polling: true });

    bot.on("message", async (msg) => {
      const chatId = msg.chat.id;
      const text = msg.text;

      if (text === "/start") {
        await bot.sendMessage(chatId, "Выбери опцию:", {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Пройти обучение",
                  web_app: { url: webAppUrl },
                },
              ],
              [
                {
                  text: "Скачать схему поиска работы",
                  callback_data: "scheme",
                },
              ],
              [
                {
                  text: "Скачать список вопросов к HR",
                  callback_data: "questions",
                },
              ],
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
        await bot.sendDocument(chatId, "./static/scheme.pdf");
        return bot.sendMessage(chatId, "Выбери опцию:", {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Пройти обучение",
                  web_app: { url: "https://elbrushackathon.vercel.app" },
                },
              ],
              [
                {
                  text: "Скачать схему поиска работы",
                  callback_data: "scheme",
                },
              ],
              [
                {
                  text: "Скачать список вопросов к HR",
                  callback_data: "questions",
                },
              ],
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
      if (msg.data === "questions") {
        await bot.sendMessage(chatId, "Отправляю Вам список вопросов:");
        await bot.sendDocument(chatId, "./static/questions.pdf");
        return bot.sendMessage(chatId, "Выбери опцию:", {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Пройти обучение",
                  web_app: { url: "https://elbrushackathon.vercel.app" },
                },
              ],
              [
                {
                  text: "Скачать схему поиска работы",
                  callback_data: "scheme",
                },
              ],
              [
                {
                  text: "Скачать список вопросов к HR",
                  callback_data: "questions",
                },
              ],
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

      if (msg.data === "meme") {
        // await bot.sendMessage(chatId, "Лови мем!");
        const randomNumber = Math.floor(Math.random() * 22) + 1;
        await bot.sendPhoto(chatId, `./static/memes/${randomNumber}.jpg`);
        return bot.sendMessage(chatId, "Выбери опцию:", {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Пройти обучение",
                  web_app: { url: "https://elbrushackathon.vercel.app" },
                },
              ],
              [
                {
                  text: "Скачать схему поиска работы",
                  callback_data: "scheme",
                },
              ],
              [
                {
                  text: "Скачать список вопросов к HR",
                  callback_data: "questions",
                },
              ],
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
