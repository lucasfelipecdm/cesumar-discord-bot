module.exports = {
    name: 'alternatives',
    args: true,
    usage: '<alternatives>',
    cooldown: 5,
    aliases: ['alternativas'],
    description: 'Set the next alternatives.',
    execute: (message, args) => {
        for (let i; i < 5; i++) {
            message.client.question.alternatives[i] = message.content;
        }

        message.channel.send('Alternatives added!');

        message.channel.bulkDelete(4, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
        });

        message.channel.send(args);
        message.client.question.createEmbed(message);
    }
};
