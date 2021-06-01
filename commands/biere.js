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
                message.delete();
                message.reply ("`Tu ne peux pas t'offrir une bière a toi même !`");
                return 
            }
            else{
                message.delete();
                message.channel.send( ":beers: <@" + joueur_tag +">" + ", tu as recu une biere de la part de " + "<@" + sender +"> !");
                return
            }
            
        }
    }
}