const { ReactionCollector } = require("discord.js")

module.exports = {
    name: 'clear',
    description: 'clear le chat',
    async execute(message, args){
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply ("Vous n'avez pas les permissions pour utiliser cette commande !")
        if (!args[0]) return message.reply('Vous devez entrez un nombre de messages a supprimer !');
        if (isNaN(args[0])) return message.reply('Entrez un nombre compris entre 1 et 100');
        if (args[0] > 100) return message.reply('Vous ne pouvez pas supprimer plus de 100 messages !');
        if (args[0] < 2) return message.reply ('Tu ne peux pas supprimer un seul message !');

        await message.channel.messages.fetch({limit : args[0]}).then(messages => {
            message.channel.bulkDelete(messages, true).then (message.channel.send("`J'ai supprimé "+args[0]+" messages avec succès !`"));
        })
     }
}