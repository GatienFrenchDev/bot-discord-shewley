const Discord = require("discord.js")

module.exports = {
    name: 'pfp',
    description: 'envoie la pfp de qqn',
    execute(message, args) {
        if (!args[0]) return message.reply ("`Tu dois identifier quelqu'un !`");
        if (!message.mentions.members.first()) return message.reply("`Tu dois identifier quelqu'un !`");
        else{
            const user = message.mentions.users.first();
            const emb=new Discord.MessageEmbed().setImage(user.displayAvatarURL()).setFooter(user.username)
            message.channel.send(emb)
            return
        }
    }
}