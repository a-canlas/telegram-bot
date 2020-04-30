const Telegram_Bot = require('node-telegram-bot-api');
// const axios = require('axios');

require('dotenv').config();
const token = process.env.TELEGRAM_TOKEN;

let bot;

if(process.env.NODE_ENV === 'production'){
  bot = new Telegram_Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
} else {
  bot = new Telegram_Bot(token, {polling: true});
}
