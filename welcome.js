const Discord = require('discord.js');

module.exports = (client) => {
    
    const channelid = '565118792569585674' //channel de bienvenue

    client.on('guildMemberAdd', (member) => {

        const embed = new Discord.MessageEmbed()
                .setColor('2c99e2')
                .setTitle('👋 Bienvenue')
                .setDescription(`Bienvenue à toi <@${member.id}> sur le serveur du **Shewley Studio** ! \n \n Viens discuter avec nous dans le channel <#542417334170681346> `)
                .setThumbnail('https://cdn.discordapp.com/icons/542408045750124544/a_8ed7db1e30fcd3810716d71a79b08bcc.webp?size=128')
                .setFooter(`Tu es le ${client.users.cache.size}ème membre !`)
                const channel = member.guild.channels.cache.get(channelid)
                channel.send(embed);
                return        
    })
}