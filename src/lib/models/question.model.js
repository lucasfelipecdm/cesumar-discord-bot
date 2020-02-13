const Discord = require('discord.js');

module.exports = {
    question: {
        title: '<Title of Question>',
        content: '<Content of Question>',
        url: 'https://studeo.unicesumar.edu.br/'
    },
    alternatives: [
        {id:1, content: 'Content of alternative 1', votes: 0 },
        {id:2, content: 'Content of alternative 2', votes: 0 },
        {id:3, content: 'Content of alternative 3', votes: 0 },
        {id:4, content: 'Content of alternative 4', votes: 0 },
        {id:5, content: 'Content of alternative 5', votes: 0 }
    ],
    cooldown: setTimeout(() => {
        console.log('Acabou a votação');
    }, 60 * 1000),
    createEmbed: (message) => {
        const question = message.client.question.question;
        const alternatives = message.client.question.alternatives;
        const url = message.client.question.question.url;
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
            .addField('Alternativa 1', alternatives[0].content)
            .addField('Alternativa 2', alternatives[1].content)
            .addField('Alternativa 3', alternatives[2].content)
            .addField('Alternativa 4', alternatives[3].content)
            .addField('Alternativa 5', alternatives[4].content)
            .addBlankField()
            .addBlankField()
            .setFooter('Use "!alternativa <number>" or "!a <number>" to vote at some alternative!', 'https://filacoahuila.com/wp-content/uploads/2019/11/Exclamation-Mark-Icon---Exclamation-mark-PNG---transparent-png-image-slick-justify.jpg');

        message.channel.send(questionEmbed);
    }
}