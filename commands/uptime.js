const Discord = require("discord.js")

module.exports = {
    name: 'uptime',
    description: 'renvoie le uptime du bot',
    execute(message, args, client) {
        let uptime = client.uptime/3600000 //uptime en heures
        arrondi = uptime*100;          
        arrondi = Math.round(arrondi);
        uptime = arrondi/100; 
        if (uptime > 48){
            const embed = new Discord.MessageEmbed()
            .setColor('2c99e2')
            .setTitle('⏱ Uptime')
            .setDescription(`Je suis online depuis ${uptime/24} jours !`)
            message.channel.send(embed);
        } else{
            const embed = new Discord.MessageEmbed()
            .setColor('2c99e2')
            .setTitle('⏱ Uptime')
            .setDescription(`Je suis online depuis ${uptime} heures !`)
            message.channel.send(embed);
        }
        return
    }
}