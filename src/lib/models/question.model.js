const Discord = require('discord.js');

module.exports = {
    question: { title: '', content: '' },
    alternatives: [],
    url: 'https://studeo.unicesumar.edu.br/',
    createEmbed: (message) => {
        const question = message.client.question.question;
        const alternatives = message.client.question.alternatives;
        const url = message.client.question.url;
        const authorName = message.author.username;
        const authorAvatar = message.author.avatarURL;
        const questionEmbed = new Discord.RichEmbed()
            .setColor('#00dbf2')
            .setAuthor(authorName, authorAvatar, authorAvatar)
            .setTitle(question.title)
            .setURL(url)
            .setDescription(question.content)
            .setThumbnail('https://studeo.unicesumar.edu.br/br/edu/unicesumar/web-angular-layout/src/assets/img/logo_studeo.02d9bea2.png')
            .addBlankField()
            .addField('Alternativa 1', alternatives[0])
            .addField('Alternativa 2', alternatives[1])
            .addField('Alternativa 3', alternatives[2])
            .addField('Alternativa 4', alternatives[3])
            .addField('Alternativa 5', alternatives[4])
            .addBlankField()
            .addBlankField()
            .setFooter('Use "!alternativa <number>" or "!a <number>" to vote at some alternative!', 'https://filacoahuila.com/wp-content/uploads/2019/11/Exclamation-Mark-Icon---Exclamation-mark-PNG---transparent-png-image-slick-justify.jpg');

        message.channel.send(questionEmbed);
    }
}