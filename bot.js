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

  var bDay = 'happy birthday';
  if(msg.text.toString().toLowerCase().includes(bDay)){
    bot.sendMessage(msg.chat.id, '\u304A\u8A95\u751F\u65E5\u304A\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307E\u3059');
  }

  var how = 'how are you?'
  var feelings = ['I\'m doing good', 'Meh', 'Living the dream', 'Need caffeine...', 'I didn\'t even have to use my AK... I gotta say it was a good day', 'I\'m hungry', 'I feel GREAT!', 'Feeling sleepy..', 'I\'m thirsty', 'I\'m pretty drunk..WOOOOOOOO!!!!!!', 'A little pissed off'];
  if(msg.text.toString().toLowerCase().indexOf(how) === 0){
    var feelingIndex = Math.floor(Math.random() * feelings.length);
    bot.sendMessage(msg.chat.id, feelings[feelingIndex]);
  }
});
