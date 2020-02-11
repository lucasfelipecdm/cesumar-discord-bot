const Discord = require('discord.js');

module.exports = {
    question: { title: '', content: '' },
    alternatives: [],
    createEmbed: (message) => {
        const question = message.client.question.question;
        const alternatives = message.client.question.alternatives;
        const exampleEmbed = new Discord.RichEmbed()
            .setTitle(question.title)
            .setDescription(question.content)
            .addBlankField()
            .addField(alternatives[0], 'Alternativa 1')
            .addField(alternatives[1], 'Alternativa 2')
            .addField(alternatives[2], 'Alternativa 3')
            .addField(alternatives[3], 'Alternativa 4')
            .addField(alternatives[4], 'Alternativa 5')

        message.channel.send(exampleEmbed);
    }
}