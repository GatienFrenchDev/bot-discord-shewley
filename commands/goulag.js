const Discord = require('discord.js');

module.exports = {
    name: 'goulag',
    description: 'envoie qqn au goulag',
    async execute(message, args) {
        let sender = message.author.id;
        if (!message.mentions.members.first()){
			const embed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('GOULAG <:goulag:852947831751966734>')
            .setDescription(`<@${sender}>, tu dois identifier la personne que tu souhaites envoyer au goulag !`)
            message.channel.send(embed);
			return
		}
        let role_goulag = '852942201397706786'
        let member = message.mentions.members.first();
        if(message.member.hasPermission('KICK_MEMBERS')){
            member.roles.add(role_goulag)
            const embed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('GOULAG <:goulag:852947831751966734>')
            .setDescription(`${member}, tu as été envoyé au **goulag** par <@${sender}> !`)
            message.channel.send(embed);
            message.react('<:goulag:852947831751966734>');
            return 
        }else{
            const embed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('GOULAG <:goulag:852947831751966734>')
            .setDescription(`<@${sender}>, tu n'as pas les permissions pour envoyer des gens au goulag !`)
            message.channel.send(embed)
            return
        }
    }
}