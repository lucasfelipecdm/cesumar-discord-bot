const Discord = require('discord.js');

module.exports = {
    name: 'teste',
    args: true,
    usage: '<number>',
    cooldown: 5,
    aliases: ['testezada'],
    description: 'A test command send back from bot',
    execute: (message, args) => {
        const exampleEmbed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('Some title')
            .setURL('https://discord.js.org/')
            .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addField('Regular field title', 'Some value here')
            .addBlankField()
            .addField('Inline field title', 'Some value here', true)
            .addField('Inline field title', 'Some value here', true)
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        // channel.send(exampleEmbed);
        message.channel.send(exampleEmbed);
    }
};
