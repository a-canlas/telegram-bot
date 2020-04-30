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

bot.on('message', (msg) => {
  var hi = 'hi';
  if(msg.text.toString().toLowerCase().indexOf(hi) === 0){
    bot.sendMessage(msg.chat.id, `Beep boop, Konnichiwa ${msg.from.first_name}!`);
  }

  var bye = 'bye';
  if(msg.text.toString().toLowerCase().includes(bye)){
    bot.sendMessage(msg.chat.id, "Okay, see ya");
  }

  var who = 'who are you?';
  if(msg.text.toString().toLowerCase().indexOf(who) === 0){
    bot.sendMessage(msg.chat.id, 'Brrrrzzzt. I am Matcha Bot. The bot version of Matcha Shiba');
  }
});
