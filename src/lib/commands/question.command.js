module.exports = {
    name: 'question',
    args: true,
    usage: '<question>',
    cooldown: 5,
    aliases: ['questão'],
    description: 'Set the next question.',
    execute: (message, args) => {
        const auxVar = args.trim().split(/ +/);
        const title = `${auxVar[0]} ${auxVar[1].split('\n')[0]}`;
        const content = args.trim().slice(title.length);

        message.client.question.question.title = title;
        message.client.question.question.content = content;

        message.channel.send(`Question set successfully`);
    }
};
