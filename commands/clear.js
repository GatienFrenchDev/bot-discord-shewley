module.exports = {
    name: 'clear',
    description: 'clear le chat',
    async execute(message, args){
        if(!messsage.member.hasPermission("MANAGE_MESSAGE")){
            return message.reply('Tu n as pas les permissions pour clear le chat !').then(message => message.delete(1000));
        }
        if (isNaN(args[0]) || parseInt(args[0] <= 0 )) {
            return message.reply('tu ne peux pas supprimer 0 messages').then(message => message.delete(1000));
        }

    //     let deleteAmount;

    //     if (parseInt(args[0]) > 100) {
    //         deleteAmount = 100;
    //     } else{
    //         deleteAmount = parseInt(args[0]);
    //     }

    //     message.channel.bulkDelete(deleteAmount, true).then(deleted => message.channel.send(`J'ai supprimé \`{$deleteamount}\` messages`))
     }
}