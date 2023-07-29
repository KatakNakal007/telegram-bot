const TelegramBot = require('node-telegram-bot-api');

// Ganti <YOUR_BOT_TOKEN> dengan token bot Anda
const bot = new TelegramBot('6328403381:AAFa2c5b56sgzgddW2GfJoob0axmCkXJCMc', { polling: true });

// Respon saat bot menerima perintah /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Halo! Selamat datang di bot Telegram.');
});

// Respon saat bot menerima pesan teks
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    bot.sendMessage(chatId, `Anda mengirim pesan: ${messageText}`);
});
