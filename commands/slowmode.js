const Discord = require('discord.js');

module.exports = {
    name: 'slowmode',
    description: 'change le slowmode du channel',
    async execute(message, args){
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply ("Vous n'avez pas les permissions pour utiliser cette commande !")
        if (!args[0]) return message.reply ("Tu dois entrer la valeur du slowmode (en secondes) !")
        if (isNaN(args[0])) return message.reply('Tu dois entrer un nombre valide !')


        const sender = message.author.id;

        message.channel.setRateLimitPerUser(args[0] , `Slow Mode du channel <#${message.channel.id}> défini sur ${args[0]} par <@${sender}>`);


        const embed = new Discord.MessageEmbed()
        .setColor('ffde24')
        .setTitle('⏳ Slow Mode')
        .setDescription(`Le mode lent a été défini sur **${args[0]} secondes** par <@${sender}>!`)
        message.channel.send(embed);
        return 
    }
}
