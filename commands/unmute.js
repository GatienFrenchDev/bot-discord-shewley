const Discord = require('discord.js');
const config = require('../config/config.json')

module.exports = {
    name: 'unmute',
    description: 'unmute une personne de son choix',
    async execute(message, args, client){

        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("`Vous n'avez pas les permissions d'utiliser cette commande !`")
        if (!message.mentions.members.first()) return message.channel.send("`-unmute [@user]`")

        let mute_member = message.mentions.members.first()
        mute_member.roles.remove(config.role_mute)
        args.shift()
        let reason = args.toString()

        const embed = new Discord.MessageEmbed()
            .setColor('#04ff00')
            .setTitle('Unmute 🚫')
            .setDescription(`${mute_member} a été unmute par ${message.author}`)
        client.channels.cache.get(config.channel_palais_justice).send(embed)

    }
}