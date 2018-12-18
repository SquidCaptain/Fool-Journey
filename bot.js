const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require('./auth.json').token

bot.on('message', function(message) {
    if(message.content == 'ore wa') {
        message.reply('ochinchin ga daisuki nandayo');
    }
});

bot.on('ready', function() {
    console.log("Ready");
})

bot.login(token);
