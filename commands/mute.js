const Discord = require('discord.js');
const config = require('../config/config.json')

module.exports = {
    name: 'mute',
    description: 'mute une personne de son choix',
    async execute(message, args, client){

        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("`Vous n'avez pas les permissions d'utiliser cette commande !`")

        if (args.length < 2) return message.channel.send("`-mute [@user] [raison]`")
        if (!args[0].startsWith('<@!')) return message.channel.send("`-mute [@user] [raison]`")
        if (!message.mentions.members.first()) return message.channel.send("`-mute [@user] [raison]`")

        let mute_member = message.mentions.members.first()
        mute_member.roles.add(config.role_mute)
        args.shift()
        let reason = args.toString()

        const embed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Mute 🚫')
            .setDescription(`${mute_member} a été mute par ${message.author}.\nRaison :\n${reason}`)
        client.channels.cache.get(config.channel_palais_justice).send(embed)

    }
}