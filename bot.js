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
  if(msg.text.toString().toLowerCase().indexOf(how) === 0){
    var feelingIndex = Math.floor(Math.random() * matcha.feelings.length);
    bot.sendMessage(msg.chat.id, matcha.feelings[feelingIndex]);
  }

  if(msg.text.toString().toLowerCase().includes('favorite color')){
    bot.sendMessage(msg.chat.id, matcha.favorites.color);
  }



  var matcha = {
    name: 'Matcha Shi-bot',
    favorites: {
      color: 'green',
      foods: ['Katsu Curry', 'Sushi', 'Tempura', 'Ramen', 'Curry', 'Hot Soba', 'Cold Soba', 'Curry', 'Fruit', 'Berries'],
      drinks: ['Matcha', 'Green Tea', 'Tea', 'Sencha', 'Oolong'],
      places: ['Japan', 'the beach', 'Japanese gardens', 'tea houses'],
      games: {
        gameboy: ['Mario Golf', 'Pokemon Green', 'Pokemon Crystal', 'Magical Vacation', 'Wario Ware', 'Legend of Zelda Minish Cap', 'Legend of Zelda: Links Awakening', 'Breath of Fire', 'Shining Force', 'Golden Sun']
      }
    },
    birthday: 'February 29',
    feelings: ['I\'m doing good', 'Meh', 'Living the dream', 'Need caffeine...','I\'m hungry', 'I feel GREAT!', 'Feeling sleepy..', 'I\'m thirsty', 'I\'m pretty drunk..WOOOOOOOO!!!!!!', 'A little pissed off', 'Genki desu'],
    location: 'Orange County, California',
    height: 'Short',
    weight: 'My secret',
    age: 'Brrrrrzzztt....error detected!',
    sex: 'Not on first date...\nOh! You don\'t mean that',
    species: 'Inu \u1F415',
    job: 'I make tea and cook',
    workplace: 'at my cafe',
    hobbies: ['tea', 'traveling everywhere', 'playing my Game Boy', 'building things', 'gardening', 'reading', 'karaoke', 'watercolor', 'exploring the outdoors', 'surfing'],
    canBoop: false,
    isNice: true,
    meanSayings: ['Shut up', 'Go away..', '...', 'Piss off', 'Bite me', '\u3070\u3095']

  }

});
