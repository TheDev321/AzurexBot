const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('ready', () => {
  console.log('I am ready!');
});

Client.on('message', message => {
  if (message.Content === 'ping') {
    message.reply('pong');
  }
});

Client.login(process.env.BOT_TOKEN);
