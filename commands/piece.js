const Discord = require("discord.js")

module.exports = {
    name: 'piece',
    description: 'simule un lancer de piece et fait un pile ou face',
    async execute(message, args) {
        const choices= ["`pile`", "`face`"];
        const choice = choices[Math.floor(Math.random() * 2)];
        const embedhelp = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Pile ou face ?')
        .setDescription(`La pièce tombe sur ${choice} !`)
        message.channel.send(embedhelp);
    }
}