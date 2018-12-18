const Discord = require(discord.js);
const bot = new Discord.Client();
const token = 'NTI0Mzg5MjUwODU5MjcwMTQ3.DvnXdQ.pnXKZwI7MP2qOXMOpP8RGqKsDeU';

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

const commands = ['ping', 'pong'];

bot.on('message', msg => {
  var plop = msg.content;
  if (commands.includes(plop)) {
    
    if (plop === 'ping') {
        msg.reply('Pong!');
    } else if (plop === 'pong') {
        msg.reply('Fool');
    }

  }
});

bot.login('token');