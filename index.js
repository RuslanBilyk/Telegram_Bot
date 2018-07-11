const  TelegramBot = require('node-telegram-bot-api');
const  token = 'TOKEN';
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg, match) => {
    let text = 'HELLO MY FRIEND?';
    console.log(match);
    bot.sendMessage(msg.chat.id, text, mainKeyboard);
    console.log(keyboard);
});

let mainKeyboard = {
    reply_markup: {
        keyboard: [
            ['📁 Каталог' ,'🛒 Кошик'],
            ['📦 Замовлення','📣 Новини'],
            ['⚙️ Налаштування', '❓ HELP']
        ],
        hide_keyboard: true,
        resize_keyboard: true
    }
};

let katalogKeyboard = {
     reply_markup: {
        keyboard: [
            ['🔙 Назад']
        ],
        hide_keyboard: true,
        resize_keyboard: true
    }
}

bot.on('message', (msg) => {
    const chatId = msg.chat.id; 
    //bot.sendMessage(chatId, msg.text);
    bot.sendMessage(chatId, 'Received your message');
   
    var photo = './q.jpg';
    bot.sendPhoto(msg.chat.id, photo, {caption: "Image info!"});

    switch(msg.text){
        case '📁 Каталог' :

        bot.sendMessage(msg.chat.id, msg.text, katalogKeyboard);
        bot.sendMessage(msg.chat.id, 'Выберите любую кнопку:', options);
        break;
        case '🛒 Кошик' :
            bot.sendMessage(msg.chat.id, msg.text, katalogKeyboard);
            bot.sendMessage(msg.chat.id, 'Выберите любую кнопку:', options);
        break;
        case '📦 Замовлення' :
            bot.sendMessage(msg.chat.id, msg.text, katalogKeyboard);
            bot.sendMessage(msg.chat.id, 'Выберите любую кнопку:', options);
        break;
        case '📣 Новини' :
            bot.sendMessage(msg.chat.id, msg.text, katalogKeyboard);
            bot.sendMessage(msg.chat.id, 'Выберите любую кнопку:', options);
        break;
        case '⚙️ Налаштування' :
            bot.sendMessage(msg.chat.id, msg.text, katalogKeyboard);
            bot.sendMessage(msg.chat.id, 'Выберите любую кнопку:', options);
        break;
        case '❓ HELP' :
            bot.sendMessage(msg.chat.id, msg.text, katalogKeyboard);
            bot.sendMessage(msg.chat.id, 'Выберите любую кнопку:', options);
        break;
        case '🔙 Назад' :
            bot.sendMessage(msg.chat.id, msg.text, keyboard);
           
        break;
    }
});



let options = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: 'Good # 1', callback_data: 'data_1' }, { text: 'Good # 2', callback_data: 'data_2' }],
        [{ text: 'Good # 2', callback_data: 'data_2' }],
        [{ text: 'Good # 3', callback_data: 'data_3' }],
        [{ text: 'Good # 1', callback_data: 'data_1' }],
        [{ text: 'Good # 2', callback_data: 'data_2' }],
        [{ text: 'Good # 3', callback_data: 'data_3' }]
      ]

    })
  };