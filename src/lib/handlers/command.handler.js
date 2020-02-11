const { prefix } = require('../../config/config.json');
const Antispam = require('./antispam.handler');
const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    loadCommands: () => {
        const commands = new Discord.Collection();
        const commandFiles = fs.readdirSync('src/lib/commands').filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            commands.set(command.name, command);
        }

        return commands;
    },
    processCommand: (message) => {
        const commandName = message.content.slice(prefix.length).split(/ +/).shift().toLowerCase();
        const args = message.content.slice((prefix.length + commandName.length));
        const commands = message.client.commands;
        const command = commands.get(commandName) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));;

        if (!command) {
            message.channel.send('404 - Command not found!');
            return;
        }

        if (command.args && !args.length) {
            let reply = `You didn't provide any arguments, ${message.author}!`;

            if (command.usage) {
                reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
            }

            return message.channel.send(reply);
        }

        Antispam.verifySpam(command, message);

        try {
            command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    }
}
