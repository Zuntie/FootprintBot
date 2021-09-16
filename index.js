const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { MessageEmbed } = require('discord.js');
const token = require('./config.json').token;

/* Variables */
var ejerID = '874692446838202439'
var supportID = 'X';
var allowlist = 'X';
var botID = '874692235898273834'
var github = 'https://github.com/Zuntie';

 /* STARTER OP */
client.on('ready', () => {
    console.log(`Logged in som ${client.user.tag}!`);
    client.user.setActivity('Zuntie Udvikle', { type: 'WATCHING' });
});

/* EMBEDS */
const embed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('EMBED')
    .setDescription('EMBED')

const ip = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('IP: Under Udvikling')

const commands = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('**COMMANDS**')
    .addField('!ip', 'Sender dig ipen til serveren. [WIP]')
    .addField('!ping', 'Sender dig bottens response time.')
    .addField('!support', 'Skriver til support teamet at du har brug for hjælp.')
    .addField('!hjemmeside', 'Sender dig et link til vores hjemmeside. [WIP]')
    .addField('!github', "Sender dig et link til Zuntie's Github.")
    .setFooter('Coded by FootPrint Devs')

/* Command listener */
client.on('message', msg => {
    /* Whitelist System 
    if (msg.content.toLowerCase().includes('whitelist') && msg.mentions.users.size > 0) {
        if (msg.member.roles.cache.has('874692446838202439')) {
            const user = msg.mentions.users.first();
            if (user) {
                msg.channel.send(`${user.tag} blev allowlisted!`);
                msg.channel.send('** **')
                
            }
        } else {
            msg.channel.send('You do not have permission to use this command!');
        }
    }*/
    if (msg.content === '!text') {
        msg.channel.send("text");
    }
    if (msg.content === '!hjemmeside') {
        msg.channel.send("*Kommer snart*");
    }
    if (msg.content === '!support') {
        msg.channel.send(`<@&${supportID}>`);
    }
    if (msg.content === '!ip') {
        msg.channel.send({ embeds: [ip] })
    }
    if (msg.content === '!commands') {
        msg.channel.send({ embeds: [commands] })
    }
    if (msg.content === '!ping') {
        msg.channel.send(`🏓 Latency er ligenu ${Date.now() - msg.createdTimestamp}ms. API er ligenu ${Math.round(client.ws.ping)}ms 🏓`);
    }
    if(msg.content === '!github') {
        msg.channel.send(`${github}`)
    }
});


/* LOGIN */
client.login(token)