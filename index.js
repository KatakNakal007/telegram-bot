const TelegramBot = require('node-telegram-bot-api');

const token = '6328403381:AAFa2c5b56sgzgddW2GfJoob0axmCkXJCMc';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome", {
        "reply_markup": {
            "keyboard": [["Sample text", "Second sample"], ["Keyboard"], ["I'm robot"]]
        }
    });

});

bot.on('message', (msg) => {
    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello " + msg.from.first_name);
    }
    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
        bot.sendMessage(msg.chat.id, "Hope to see you around again " + msg.from.first_name + " Bye");
    }
    var robot = "I'm robot";
    if (msg.text.indexOf(robot) === 0) {
        bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
    }
    var location = "location";
    if (msg.text.indexOf(location) === 0) {
        bot.sendLocation(msg.chat.id, 44.97108, -104.27719);
        bot.sendMessage(msg.chat.id, "Here is the point");
    }

    var what = "idiot";
    if (msg.text.includes(what)) {
        bot.kickChatMember(msg.chat.id, msg.from.id);
    }

});

bot.onText(/\/sendpic/, (msg) => {

    bot.sendPhoto(msg.chat.id, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM9ffKeZxsRp6Nks_L7VlVJhN6-f7yPBG-aQ&usqp=CAU"
        , { caption: "Here we go ! \nThis is just a caption " });

});

