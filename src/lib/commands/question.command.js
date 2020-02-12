const Alternatives = require('./alternatives.command');
module.exports = {
    name: 'question',
    args: true,
    usage: '<question>',
    cooldown: 5,
    aliases: ['questão', 'q'],
    description: 'Set the next question.',
    execute: (message, args) => {
        if (!message.member.roles.find(role => role.name === 'Mod')) {
            message.channel.send("Sorry, you don't have permission to use this command. :(");
            return;
        }
        const auxVar = args.trim().split('\n');
        const title = auxVar[0];
        let content;

        if (args.trim().search('Alternativas')) 
            content = args.trim().slice(title.length, args.trim().search('Alternativas'));
        else
            content = args.trim().slice(title.length);


        message.client.question.question.title = title;
        message.client.question.question.content = content;

        Alternatives.execute(message, args);
    }
};
