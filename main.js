const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();

const prefix = "-";

const fs = require('fs');

const welcome = require('./welcome')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(' ______                 ______ _                 _                  ');
    console.log('(____  \        _      / _____) |               | |             ');
    console.log(' ____)  ) ___ _| |_   ( (____ | |__  _____ _ _ _| | _____ _   _ ');
    console.log('|  __  ( / _ (_   _)   \____ \|  _ \| ___ | | | | || ___ | | | |');
    console.log('| |__)  ) |_| || |_    _____) ) | | | ____| | | | || ____| |_| |');
    console.log('|______/ \___/  \__)  (______/|_| |_|_____)\___/ \_)_____)\__  |');
    console.log('                                                         (____/ ');
    console.log('Codé par gαтιєη#5600 pour le Shewley Studio');
    console.log('Connecté en tant que : ' + client.user.tag);
    client.user.setActivity('-help | twitch.tv/shewleystudio', { type: 'WATCHING' });
    welcome(client);
})

client.on('message', message => {
    if (message.content.startsWith(prefix) && (!message.author.bot)) {
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        if (command === 'ping') {
            let ping = Date.now() - message.createdTimestamp;
            message.channel.send(":ping_pong: `PONG ! (" + ping + "ms)`")
        }
        else if (command === 'skip') {
            client.commands.get('skip').execute(message, args);
        }
        else if (command === 'p' || command === 'play') {
            client.commands.get('p').execute(client, message, args);
        }
        else if (command === 'goulag' || command === 's') {
            client.commands.get('goulag').execute(message, args);
        }
        else if (command === 'biere' || command === 'beer') {
            client.commands.get('biere').execute(message, args);
        }
        else if (command === 'champagne') {
            client.commands.get('champagne').execute(message, args);
        }
        else if (command === 'piece' || command === 'coin') {
            client.commands.get('piece').execute(message, args);
        }
        else if (command === 'clear' || command === 'purge') {
            client.commands.get('clear').execute(message, args);
        }
        else if (command === 'pfp') {
            client.commands.get('pfp').execute(message, args);
        }
        else if (command === 'help') {
            client.commands.get('help').execute(message, args);
        }
        else if (command === 'kick') {
            client.commands.get('kick').execute(message, args);
        }
        
        else if (command === 'about') {
            client.commands.get('about').execute(message, args);
        }
        if (command === 'pong') {
            let ping = Date.now() - message.createdTimestamp;
            message.channel.send(":ping_pong: `PING ! (" + ping + "ms)`")
        }
        if (command === 'twitch' || command === 'ttv') {
            message.channel.send(':studio_microphone: `Notre chaine Twitch : https://twitch.tv/shewleystudio`')
        }
        if (command === 'yt' || command === 'ytb' || command === 'youtube') {
            message.channel.send(':movie_camera: `Notre chaine Youtube : https://www.youtube.com/channel/UC_Nbm0HQ7MHRdK0pAaGmd1g`')
        }
    }else if (message.content.endsWith('quoi') || message.content.endsWith('quoi ?')){
        message.channel.send('FEUR :sunglasses:')
    }else{
        return;
    }
    
})

























client.login(process.env.TOKEN);
