import express from "express";
import cors from "cors";
import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();
const BOT_TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(BOT_TOKEN, { polling: true });
const PORT = process.env.PORT | 5000;
let chatID;

const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/getToken", async (req, res) => {
  bot.sendMessage(chatID, "You will get the token");
});

bot.on("message", (msg) => {
  chatID = msg.chat.id;
  const msgText = msg.text;

  switch (msgText) {
    case "/start":
      bot.sendMessage(
        chatID,
        "Welcome to the bot! To airdrop the token, you have to check this video: t.me/test_davinci_test_bot/testMiniApp"
      );
  }
});
