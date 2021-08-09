const Discord = require("discord.js")

module.exports = {
    name: 'help',
    description: 'donne toutes les commandes',
    async execute(message, args) {
        const embedhelp = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Toutes les commandes du bot Shewley')
        .addFields(
            { name: '-about', value: 'donnes les informations sur le bot'},
            { name: '-biere ou -beer [_mention de la personne_]', value: 'offre une bière a la personne de ton choix'},
            { name: '-champagne [_mention de la personne_]', value: 'offre une coupe de champagne a la personne de ton choix'},
            { name: '-coin ou -piece', value: 'lance un pile ou face'},
            { name: '-clear ou purge [_nombres de messages_]', value: 'supprime un nombre donné de message (requiert la permission de gérer les messages)'},
            { name: '-goulag [_mention de la personne_]', value: "envoie la personne de ton choix pdt 30 secondes au goulag (requiert la permission d'expulser des membres)"},
            { name: '-help', value: 'afficher toutes les commandes'},
            { name: '-kick [_mention de la personne_]', value: "expulse la personne de votre choix du serveur (requiert la permission d'expulser des membres)"},
            { name: '-lookup [_mention de la personne_]', value: "récupère les infos du compte mentionné"},
            { name: '-mute [_mention de la personnne_] [_raison_]', value: 'mute une personne'},
            { name: '-p ou -play [_nom de la musique_]', value: 'pour jouer une musique sur un vocal via youtube'},
            { name: '-p clear', value: "vide la file d'attente du bot"},
            { name: '-p skip', value: "passe à la prochaine musique sur la file d'attente"},
            { name: '-p stop', value: 'deconnete le bot du vocal'},
            { name: '-pfp [_mention de la personne_]', value: "récupérer la photo de profil d'un utilisateur Discord"},
            { name: '-ping', value: 'vérifier la connectivite du bot'},
            { name: '-stop ou -s', value: 'faire partir le bot du channel'},
            { name: '-twitch ou -ttv', value: 'renvoie vers la chaine Twitch du Shewley Studio'},
            { name: '-slowmode [_temps en secondes_]', value: 'change la valeur du slow mode du channel'},
            { name: '-unmute [__mention de la personnne__]', value: 'demute une personne'},
            { name: '-update', value: 'met a jour le bot'},
            { name: '-uptime', value: 'renvoie depuis combien de temps le bot est connecté'},
            { name: '-yt ou -ytb ou -youtube', value: 'renvoie vers la Chaine youtube du Shewley Studio'},
        )
        message.channel.send(embedhelp);
    }
}
