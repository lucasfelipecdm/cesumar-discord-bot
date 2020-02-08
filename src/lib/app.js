module.exports = () => {
    const Discord = require('discord.js');
    const Commands = require('./handlers/command.handler');
    const { token, prefix } = require('../config/config.json');

    const client = new Discord.Client();
    client.commands = Commands.loadCommands();

    client.once('ready', () => console.log('-- READY AND PLAYING :P --'));

    client.on('message', (message) => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        Commands.processCommand(message);
    });

    client.login(token);
}
