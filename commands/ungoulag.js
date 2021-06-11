const Discord = require('discord.js');

module.exports = {
    name: 'ungoulag',
    description: 'libere qqn du goulag',
    async execute(message, args) {
        let sender = message.author.id;
        if (!message.mentions.members.first()){
			const embed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('GOULAG <:goulag:852947831751966734>')
            .setDescription(`<@${sender}>, tu dois identifier la personne que tu souhaites libérer du goulag !`)
            message.channel.send(embed);
			return
		}
        let role_goulag = '852942201397706786'
        let member = message.mentions.members.first();
        if(message.member.hasPermission('KICK_MEMBERS') && member.roles.cache.has(role_goulag)){
            member.roles.remove(role_goulag)
            const embed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('GOULAG <:goulag:852947831751966734>')
            .setDescription(`${member}, tu as été libéré du **goulag** par <@${sender}> !`)
            message.channel.send(embed);
            message.react('<:goulag:852947831751966734>');
            return 
        }else{
            const embed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('GOULAG <:goulag:852947831751966734>')
            .setDescription(`<@${sender}>, tu n'as pas les permissions pour libérer des gens du goulag !`)
            message.channel.send(embed)
            return
        }
    }
}
