module.exports = {
    name: 'alternatives',
    args: true,
    usage: '<alternatives>',
    cooldown: 5,
    aliases: ['alternativas'],
    description: 'Set the next alternatives.',
    execute: (message, args) => {
        message.client.question.alternatives[0] = message.content;
        message.client.question.alternatives[1] = message.content;
        message.client.question.alternatives[2] = message.content;
        message.client.question.alternatives[3] = message.content;
        message.client.question.alternatives[4] = message.content;

        message.channel.send('Alternatives added!');

        message.channel.bulkDelete(4, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
        });

        message.client.question.createEmbed(message);
    }
};
