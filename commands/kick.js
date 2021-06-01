module.exports = {
    name: 'kick',
    description: 'kick un utilisateur du serveur !',
    execute(message, args) {
        if(!message.member.hasPermission('KICK_MEMBERS'))) return message.reply ("`Vous n'avez pas les permissions pour exécuter cette commande !`")
        if (!args[0]) return message.reply ("`Tu dois identifier la personne à kick !`");
        if (!message.mentions.members.first()) return message.reply ("`Tu dois identifier la personne a kick !`");
        else{
            message.mentions.members.first().kick();
            message.channel.send(`${message.mentions.members.first()} a été **expulsé** du serveur à la demande de <@${(message.author.id)}>`);
        }
    }
}
