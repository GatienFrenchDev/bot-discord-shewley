const Discord = require('discord.js');

module.exports = {
    name: 'champagne',
    description: 'offre un verre de champagne a un membre',
    async execute(message, args) {
        if (!args[0]) return message.reply ("`Tu dois identifier la personne a qui tu souhaites offrir une coupe de champagne !`");
        if (!message.mentions.members.first()) return message.reply ("`Tu dois identifier la personne a qui tu souhaites offrir une coupe de champagne !`");
        else{
            const joueur_tag = message.mentions.members.first();
            const sender = message.author.id;
            if (joueur_tag == sender) {
                const embed = new Discord.MessageEmbed()
                .setColor('ffde24')
                .setTitle('🍾 CHAMPAGNE !')
                .setDescription(`<@${sender}> tu ne peux pas t'offrir une coupe de champagne a toi même !`)
                message.channel.send(embed);
                return 
            }
            else{
                const embed = new Discord.MessageEmbed()
                .setColor('ffde24')
                .setTitle('🍾 CHAMPAGNE !')
                .setDescription(`${joueur_tag} tu as reçu une une coupe de champagne 🍾 de la part de <@${sender}> !`)
                message.channel.send(embed);
                return
            }
            
        }
    }
}