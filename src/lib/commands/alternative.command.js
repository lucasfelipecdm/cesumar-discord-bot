const Discord = require('discord.js');

module.exports = {
    name: 'alternativa',
    args: true,
    usage: '<number>',
    cooldown: 5,
    aliases: ['a'],
    description: 'Vote at some alternative of last question',
    execute: (message, args) => {
        const altNumber = parseInt(args.trim());

        if (isNaN(altNumber)) {
            message.channel.send(`Oops, I think '${args}' is probably not a number, try again.`);
            return;
        } else if (altNumber > 5 || altNumber < 0) {
            message.channel.send(`You have chosen ${altNumber}, please choose a number between 1 and 5! u.u`);
            return;
        } else {
            message.client.question.alternatives[altNumber - 1].votes += 1;
            clearTimeout(message.client.question.cooldown);
            setCooldown();
        }

        function setCooldown() {
            message.client.question.cooldown = setTimeout(() => {
                const question = message.client.question.question;
                const alternatives = message.client.question.alternatives;
                const altSorted = [...alternatives].sort(compare);

                const alternativeEmbed = new Discord.RichEmbed()
                    .setColor('#00FFFF')
                    .setTitle(`Votação encerrada para a ${question.title}`)
                    .addBlankField()
                    .setDescription(`A alternativa mais votada foi **Alternativa ${altSorted[4].id}** com **${altSorted[4].votes}** votos: \n ${altSorted[4].content}`);

                message.channel.send(alternativeEmbed);
            }, 10 * 1000);
        }

        function compare(firstAlt, secondAlt) {
            if (firstAlt.votes < secondAlt.votes) {
                return -1;
            }
            if (firstAlt.votes > secondAlt.votes) {
                return 1;
            }
            return 0;
        }
    }
};
