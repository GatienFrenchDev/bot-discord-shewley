const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "-";

const fs = require('fs');

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
    console.log('coded by Xolork for Shewley Studio');
    client.user.setActivity("-help | Shewley Studio", {type: "PLAYING",});
})

client.on('message', message => {
    if (message.content.startsWith(prefix) && (!message.author.bot)) {
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        if (command === 'ping') {
            message.channel.send(':ping_pong: ` PONG !`')
        }
        else if (command === 'p') {
            client.commands.get('p').execute(message, args);
        }
        else if (command === 'stop') {
            client.commands.get('stop').execute(message, args);
        }
        else if (command === 'biere' || command === 'beer') {
            client.commands.get('biere').execute(message, args);
        }
        else if (command === 'clear') {
            client.commands.get('clear').execute(message, args);
        }
        else if (command === 'pfp') {
            client.commands.get('pfp').execute(message, args);
        }
        else if (command === 'help') {
            client.commands.get('help').execute(message, args);
        }
        
        else if (command === 'about') {
            message.channel.send(':hammer: ` Bot crée et codé le 31/06/21 par gαтιєη#5600 en JavaScript pour le serveur Discord Shewley Studio`')
        }
        if (command === 'pong') {
            message.channel.send(':ping_pong: ` PING !`' + Math.round(client.ws.ping)+'ez')
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
