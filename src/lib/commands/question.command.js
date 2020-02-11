module.exports = {
    name: 'question',
    args: true,
    usage: '<question>',
    cooldown: 5,
    aliases: ['questão'],
    description: 'Set the next question.',
    execute: (message, args) => {
        message.client.question.question = message.content;
        message.channel.send('Question added!');
    }
};
