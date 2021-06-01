const Discord = require("discord.js")

module.exports = {
    name: 'help',
    description: 'donne toutes les commandes',
    async execute(message, args) {
        const embedhelp = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Toutes les commandes')
        .addFields(
            { name: '-about', value: 'donnes les informations sur le bot'},
            { name: '-biere ou -beer [_mention de la personne_]', value: 'offre une bière a la personne de ton choix'},
            { name: '-clear [_nombres de messages_]', value: 'supprime un nombre donné de message (requiert la permission de gérer les messages)'},
            { name: '-help', value: 'afficher toutes les commandes'},
            { name: '-p [_nom de la musique_]', value: 'pour jouer une musique sur un vocal via youtube'},
            { name: '-pfp [_mention de la personne_]', value: "récupérer la photo de profil d'un utilisateur Discord"},
            { name: '-ping', value: 'vérifier la connectivite du bot'},
            { name: '-stop', value: 'faire partir le bot du channel'},
            { name: '-twitch ou -ttv', value: 'renvoie vers la chaine Twitch du Shewley Studio'},
            { name: '-yt ou -ytb ou -youtube', value: 'renvoie vers la Chaine youtube du Shewley Studio'},
        )
        message.channel.send(embedhelp);
    }
}