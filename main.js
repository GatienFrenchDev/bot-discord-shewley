// IMPORTATION DES PACKAGES
const Discord = require('discord.js');
const { parse } = require('dotenv');
require('dotenv').config();
const client = new Discord.Client();
const fs = require('fs');

// FICHIERS DONT DEPANT LE BOT
const welcome = require('./listeners/welcome')
const config = require('./config/config.json')

// RECUPERATION DES VALEURS DU CONFIG.JSON
const prefix = config.prefix
let channel_meme = config.channel_meme
let last = ''

// UTILISATION DU DOSSIER "COMMMANDS"
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

// CODE DU DEMARRAGE
client.once('ready', () => {
    console.log(' ______                 ______ _                 _                  ')
    console.log('(____  \        _      / _____) |               | |             ')
    console.log(' ____)  ) ___ _| |_   ( (____ | |__  _____ _ _ _| | _____ _   _ ')
    console.log('|  __  ( / _ (_   _)   \____ \|  _ \| ___ | | | | || ___ | | | |')
    console.log('| |__)  ) |_| || |_    _____) ) | | | ____| | | | || ____| |_| |')
    console.log('|______/ \___/  \__)  (______/|_| |_|_____)\___/ \_)_____)\__  |')
    console.log('                                                         (____/ ')
    console.log('Codé par gαтιєη#5600 pour le Shewley Studio')
    console.log('Connecté en tant que : ' + client.user.tag)
    client.user.setPresence({ activity: { name: `${client.users.cache.size} membres` , type: 'WATCHING'}, status: 'ONLINE' })
    welcome(client)
})

// S'EXECUTE A CHAQUE MESSAGE SUR LE SERVEUR
client.on('message', message => {
    if (message.author.bot) return

    // PARTIE CHANNEL MEME
    if (message.channel.id === channel_meme && message.attachments.size > 0){
        message.react('🔼')
        message.react('🔽')
        return
    }
    //SUPPRESION DE L'EMOJI '-'
    if(message.content.includes("'-'")|| message.content.includes("’-’")  || message.content.includes("' - '") || message.content.includes("'_'") || message.content.includes("' _ '") || message.content.includes('"-"') || message.content.includes("' -'") || message.content.includes("'- '") || message.content.includes(",-,")){
        message.delete()
        return
    // PARTIE COMMANDE DU BOT
    }
    if (message.content.startsWith(prefix) && (!message.author.bot)) {
        var msg = message
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        if (command === 'ping') {
            let ping = Date.now() - message.createdTimestamp;
            message.channel.send(":ping_pong: `PONG ! (" + ping + "ms)`")
        }
        else if (command === 'skip') {
            client.commands.get('skip').execute(message, args);
        }
        else if (command === 'slowmode') {
            client.commands.get('slowmode').execute(message, args);
        }
        else if (command === 'p' || command === 'play') {
            client.commands.get('p').execute(client, message, args);
        }
        else if (command === 'goulag') {
            client.commands.get('goulag').execute(message, args);
        }
        else if (command === 'mute') {
            client.commands.get('mute').execute(message, args, client);
        }
        else if (command === 'unmute') {
            client.commands.get('unmute').execute(message, args, client);
        }
        else if (command === 'update') {
            client.commands.get('update').execute(message, client);
        }
        else if (command === 'biere' || command === 'beer') {
            client.commands.get('biere').execute(message, args);
        }
        else if (command === 'champagne') {
            client.commands.get('champagne').execute(message, args);
        }
        else if (command === 'lookup') {
            client.commands.get('lookup').execute(message, args);
        }
        else if (command === 'uptime') {
            client.commands.get('uptime').execute(message, args, client);
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
        else if (command === 'goulag') {
            client.commands.get('goulag').execute(message, args);
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

    //PARTIE REPONSE QUOI -> FEUR 
    }else if (message.content.endsWith('quoi') || message.content.endsWith('quoi ?')){
        message.channel.send('FEUR :sunglasses:')
    }else{
        return;
    }
    
})

























client.login(process.env.TOKEN);
