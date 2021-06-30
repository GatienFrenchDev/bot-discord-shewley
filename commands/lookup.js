const Discord = require('discord.js');

module.exports = {
    name: 'lookup',
    description: 'lookup un compte',
    async execute(message, args){
        if (!message.mentions.members.first()) return message.reply ("`Tu dois identifier la personne souhaitée`");
                    let dateCreation = message.mentions.members.first().user.createdAt
                    const pfp = message.mentions.members.first().user.displayAvatarURL()
                    const embed = new Discord.MessageEmbed()
                    .setColor('#2c4fff')
                    .setThumbnail(pfp)
                    .setTitle(' 🔎 Account Lookup')
                    .setDescription(`**Username** : <@${message.mentions.members.first().id}> \n\n **Identifiant** Discord : ${message.mentions.members.first().id} \n\n Date de **Création** : ${dateCreation}`)
                    message.channel.send(embed);
        }
}
