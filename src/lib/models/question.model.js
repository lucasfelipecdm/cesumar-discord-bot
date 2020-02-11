const Discord = require('discord.js');

module.exports = {
    number: 0,
    question: 'Qual seu nome?',
    alternatives: ['Lucas', 'Felipe', 'Costa', 'da', 'Mata'],
    createEmbed: (message) => {
        const question = message.client.question.question;
        const alternatives = message.client.question.alternatives;
        const exampleEmbed = new Discord.RichEmbed()
            .setTitle(question)
            .addBlankField()
            .addField(alternatives[0], 'Alternativa 1')
            .addField(alternatives[1], 'Alternativa 2')
            .addField(alternatives[2], 'Alternativa 3')
            .addField(alternatives[3], 'Alternativa 4')
            .addField(alternatives[4], 'Alternativa 5')

        // channel.send(exampleEmbed);
        message.channel.send(exampleEmbed);
    }
}