module.exports = {
    name: 'alternatives',
    args: true,
    usage: '<alternatives>',
    cooldown: 5,
    aliases: ['alternativas'],
    description: 'Set the next alternatives.',
    execute: (message, args) => {
        if (!message.member.roles.find(role => role.name === 'Mod')) {
            message.channel.send("Sorry, you don't have permission to use this command. :(");
            return;
        }
        message.client.question.alternatives = [];
        const auxVar = args.split('\n');
        auxVar.forEach((aux, index) => {
            switch (aux) {
                case 'Alternativa 1:':
                case 'Alternativa 2:':
                case 'Alternativa 3:':
                case 'Alternativa 4:':
                case 'Alternativa 5:':
                    message.client.question.alternatives.push(auxVar[index + 1]);
                    break;
            }
        });

        message.channel.bulkDelete(1, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
        });

        message.client.question.createEmbed(message);
    }
};
