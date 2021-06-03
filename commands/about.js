const Discord = require('discord.js');

module.exports = {
    name: 'about',
    description: 'infos sur le bot',
    async execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setColor('ffde24')
        .setTitle('About')
        .setDescription("Le Bot Shewley a été codé en JavaScript en utilisant la bibliothèque `Discord.JS` \n L'intégralité du bot est disponible sur le GitHub de <@482590876028370966> : https://github.com/GatienFrenchDev/bot-discord-shewley \n La première version du bot est sortie le `31/06/21` \n Pour toutes questions ou suggestions merci de contacter <@482590876028370966> !")
        message.channel.send(embed);
        return 
    }
}