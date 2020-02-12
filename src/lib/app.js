const Discord = require('discord.js');
const Commands = require('./handlers/command.handler');
const QuestionModel = require('./models/question.model');
const { token, prefix } = require('../config/config.json');

module.exports = {
    execute: () => {
        const client = new Discord.Client();
        client.commands = Commands.loadCommands();
        client.question = QuestionModel;

        client.once('ready', () => {
            client.user.setActivity('my development!', { type: 'WATCHING' });

            console.log('-- READY AND PLAYING :P --')
        });

        client.on('message', (message) => {
            if (!message.content.startsWith(prefix) || message.author.bot) return;
            Commands.processCommand(message);
        });

        client.login(token);
    }
}
