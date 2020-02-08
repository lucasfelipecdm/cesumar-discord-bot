const Discord = require('discord.js');
const { token, prefix } = require('./config/config.json');

const client = new Discord.Client();

client.once('ready', ()=> console.log('Ready!'));

client.login(token);