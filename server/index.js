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
          [{ text: "Скачать схему", callback_data: "schema" }],
          [{ text: "Получить мем", callback_data: "meme" }],
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

bot.on("callback_query", async (msg) => {
  const chatId = msg.message.chat.id;
  if (msg.data === "scheme") {
    await bot.sendMessage(chatId, "Отправляю Вашу схему!");
    return bot.sendDocument(chatId, "document.pdf");
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

const PORT = 8000;

app.listen(PORT, () => console.log("server started on PORT " + PORT));
