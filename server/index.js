const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const cors = require("cors");

const token = "5821981454:AAEH4FyIvoBc9x-4F7WuAShhTYGx44boIc0";
//const webAppUrl = 'https://ornate-selkie-c27577.netlify.app';

const bot = new TelegramBot(token, { polling: true });
const app = express();

app.use(express.json());
app.use(cors());

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, "Ниже появится кнопка, заполни форму", {
      reply_markup: {
        keyboard: [
          //                  [{text: 'Заполнить форму', web_app: {url: webAppUrl + '/form'}}]
          [{ text: "Пройти обучение" }],
          [{ text: "Скачать схему" }],
          [{ text: "Получить мем" }],
          [
            {
              text: "Написать карьерному коучу Наде",
              url: "https://t.me/krutikovanad",
            },
          ],
        ],
      },
    });
  }
});

const PORT = 8000;

app.listen(PORT, () => console.log("server started on PORT " + PORT));
