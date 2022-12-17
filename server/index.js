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
    
    await bot.sendMessage(chatId, 'Выбери опцию', {
      parse_mode: "html",
      reply_markup: {
          inline_keyboard: [
            [{ text: "Пройти обучение", callback_data: "1"  }],
            [{ text: "Скачать схему", callback_data: "1"  }],
            [{ text: "Получить мем", callback_data: "1" }],
            [
              {
                text: "Написать карьерному коучу Наде",
                url: "https://t.me/krutikovanad",
              }
            ],
          ]
      }
  })
  }

  if (msg?.text === "Написать карьерному коучу Наде") {
    try {
      await bot.sendMessage(chatId, "Test");
    } catch (e) {
      console.log(e);
    }
  }
});

const PORT = 8000;

app.listen(PORT, () => console.log("server started on PORT " + PORT));
