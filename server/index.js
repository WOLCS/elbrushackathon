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
    await bot.sendMessage(chatId, "Выбери опцию", {
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [
          [{ text: "Пройти обучение", web_app: { url: "https://google.com" } }],
          [{ text: "Скачать схему", callback_data: "1" }],
          [{ text: "Получить мем", callback_data: "2" }],
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

bot.on('callback_query', async (msg) => {
  const chatId = msg.message.chat.id;
  if (msg.data === '1') {
    await bot.sendMessage(chatId, 'Отправляю Вашу схему!');
    return bot.sendDocument(chatId, 'document.pdf');
  }
  
  return bot.sendMessage(chatId, 'Ваша команда не распознана, попробуйте еще раз!');
});

const PORT = 8000;

app.listen(PORT, () => console.log("server started on PORT " + PORT));
