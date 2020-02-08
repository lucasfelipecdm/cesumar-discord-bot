module.exports = {
    loadCommands: function () {
        console.log('-- LOADING COMMANDS FILES --');

        const Discord = require('discord.js');
        const fs = require('fs');

        const commands = new Discord.Collection();
        const commandFiles = fs.readdirSync('src/lib/commands').filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            commands.set(command.name, command);
        }

        return commands;
    },
    processCommand: (message) => {
        console.log(message.content);
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        switch (command) {
            case 'teste':
                client.commands.get('teste').execute(message, args);
                break;
        }
    }
}
