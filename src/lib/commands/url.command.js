module.exports = {
    name: 'url',
    args: true,
    usage: '<url>',
    cooldown: 5,
    aliases: ['setUrl'],
    description: 'Set url for the next question.',
    execute: (message, args) => {
        if (!message.member.roles.find(role => role.name === 'Mod')) {
            message.channel.send("Sorry, you don't have permission to use this command. :(");
            return;
        }

        message.client.question.question.url = args;
        message.channel.send('URL set successfully!');
    }
};
