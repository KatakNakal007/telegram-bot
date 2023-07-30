const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = 3000;

// Ganti "YOUR_TOKEN" dengan token API bot Telegram Anda
const token = '6328403381:AAFa2c5b56sgzgddW2GfJoob0axmCkXJCMc';

const bot = new TelegramBot(token, { polling: false });

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    // Proses pembaruan dari Telegram di sini
    console.log(req.body);
    res.sendStatus(200);
});

// Ganti "YOUR_PUBLIC_URL" dengan URL publik server Anda
const webhookUrl = 'https://0ef4-103-3-220-119.ngrok-free.app/';

bot.setWebHook(webhookUrl).then(() => {
    console.log(`Webhook diatur ke: ${webhookUrl}`);
}).catch((error) => {
    console.error(`Gagal mengatur webhook: ${error}`);
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

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
