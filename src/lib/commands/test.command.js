module.exports = {
    name: 'teste',
    description: 'A test command send back from bot',
    execute: (message, args) => message.channel.send('Chegou o teste!')
};
