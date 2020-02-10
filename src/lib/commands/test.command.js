module.exports = {
    name: 'teste',
    args: true,
    usage: '<number>',
    cooldown: 5,
    aliases: ['testezada'],
    description: 'A test command send back from bot',
    execute: (message, args) => {
        message.channel.send(`Command: 'teste', Args: ${args}`);
    }
};
