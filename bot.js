const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(Njc1MzI2NTk4NDY3Mjg5MTI4.Xj10LA.oOcJ0pnjnfREJPUGRaOPqMBA0h4);//BOT_TOKEN is the Client Secret