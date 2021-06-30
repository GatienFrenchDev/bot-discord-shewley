const Discord = require("discord.js")

module.exports = {
    name: 'update',
    description: 'rafraichit le status du bot',
    execute(message, client) {
        message.react('🔄')
        const embed = new Discord.MessageEmbed()
        .setColor('1ac748')
        .setTitle('🔄 Update')
        .setDescription(`Le bot a été mis a jour avec succès !`)
        message.channel.send(embed);
        return
    }
}