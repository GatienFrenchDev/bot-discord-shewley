const Discord = require('discord.js');

module.exports = {
    name: 'biere',
    description: 'donne une biere a un membre',
    async execute(message, args) {
        if (!args[0]) return message.reply ("`Tu dois identifier la personne a qui tu souhaites offrir la bière !`");
        if (!message.mentions.members.first()) return message.reply ("`Tu dois identifier la personne a qui tu souhaites offrir la bière`");
        else{
            const joueur_tag = message.mentions.members.first();
            const sender = message.author.id;
            if (joueur_tag == sender) {
                const embed = new Discord.MessageEmbed()
                .setColor('ffde24')
                .setTitle('🍻 Taverne')
                .setDescription(`<@${sender}> tu ne peux pas t'offrir une bière a toi même !`)
                message.channel.send(embed);
                return 
            }
            else{
                const embed = new Discord.MessageEmbed()
                .setColor('ffde24')
                .setTitle('🍻 Taverne')
                .setDescription(`${joueur_tag} tu as reçu une chope de bière 🍺 de la part de <@${sender}> !`)
                message.channel.send(embed);
                return
            }
            
        }
    }
}