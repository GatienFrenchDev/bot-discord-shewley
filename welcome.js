module.exports = (client) => {
    
    const channelid = '565118792569585674' //channel de bienvenue

    client.on('guildMemberAdd', (member) => {

        const message = `Bienvenue à toi <@${member.id}>, passe un bon moment sur le serveur **Shewley Studio** !`
        
        const channel = member.guild.channels.cache.get(channelid)

        channel.send(message);
    })
}