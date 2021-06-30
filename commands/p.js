const ytdl = require('ytdl-core');
const ytStearch = require('yt-search');
const Discord = require('discord.js');

var queue = [];

function play(connection, message){

    //joue la musique
    dispatcher = connection.play(ytdl(queue[0], {filter: "audioonly"}));

    //quand la musique a fini de tourner
        dispatcher.on("finish", function() {
        queue.shift();
        if (!queue.length == 0) play(connection, message);
        else connection.disconnect();
    });
}

module.exports = {
    name: 'p',
    description: 'joue de la musique',
    async execute(client, message, args) {

        //vérifications des trucs de bases
        if (!message.member.voice.channel){
            const embed = new Discord.MessageEmbed()
            .setColor('1cffc6')
            .setTitle('🎼 Musique !')
            .setDescription(`<@${message.author.id}>, tu dois etre dans un salon vocal !`)
            message.channel.send(embed);
            return
         }
        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
            .setColor('1cffc6')
            .setTitle('🎼 Musique !')
            .setDescription(`<@${message.author.id}>, tu dois entrer le nom de la musique !`)
            return
        }
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
        if(validURL(args[0])){
            if (!queue.length == 0) {
                const embed = new Discord.MessageEmbed()
                .setColor('1cffc6')
                .setTitle('🎼 Musique !')
                .setDescription(`**${args[0]}** a été ajouté à la file d'attente par <@${message.author.id}>`)
                message.channel.send(embed);
                queue.push(args[0])
                return
            }
            queue.push(args[0]);
            message.member.voice.channel.join().then(function(connection){play(connection, message)});
            const embed = new Discord.MessageEmbed()
            .setColor('1cffc6')
            .setTitle('🎼 Musique !')
            .setDescription(`Je joue maintenant **${args[0]}** demandé par <@${message.author.id}>`)
            message.channel.send(embed);
            return
        }

        if (args[0] === 'clear'){
            queue = [];
            const embed = new Discord.MessageEmbed()
            .setColor('1cffc6')
            .setTitle('🎼 Musique !')
            .setDescription(`La file d'attente a été clear avec succès par <@${message.author.id}> !`)
            message.channel.send(embed);
            return
        }
        if (args[0] === 'stop'){
            message.member.voice.channel.leave();
            queue = [];
            const embed = new Discord.MessageEmbed()
            .setColor('1cffc6')
            .setTitle('🎼 Musique !')
            .setDescription(`<@${message.author.id}> m'a fait quitté le vocal`)
            message.channel.send(embed);
            return
        }
        if (args[0] === 'skip'){
            queue.shift();
            message.member.voice.channel.join().then(function(connection){play(connection, message)});
            const embed = new Discord.MessageEmbed()
            .setColor('1cffc6')
            .setTitle('🎼 Musique !')
            .setDescription(`<@${message.author.id}> a skip la musique actuelle`)
            message.channel.send(embed);
            return
        }

        const VideoFinder = async (query) => {
            const VideoResult = await ytStearch(query);

            return (VideoResult.videos.length > 1) ? VideoResult.videos[0] : null;
        }

        const video = await VideoFinder(args.join(' '));


        

        // si il y a un truc dans la file d'attente il ajuste juste la nouvelle musique a la file d'attente
        if (!queue.length == 0) {
            const embed = new Discord.MessageEmbed()
            .setColor('1cffc6')
            .setTitle('🎼 Musique !')
            .setDescription(`**${video.title}** a été ajouté à la file d'attente par <@${message.author.id}>`)
            message.channel.send(embed);
            queue.push(video.url)
            return
        }

        //ajout de la musique a la file d'attente
        queue.push(video.url);

        //lancement de la musique
        message.member.voice.channel.join().then(function(connection){play(connection, message)});

        const embed = new Discord.MessageEmbed()
        .setColor('1cffc6')
        .setTitle('🎼 Musique !')
        .setDescription(`Je joue maintenant **${video.title}** demandé par <@${message.author.id}>`)
        message.channel.send(embed);

    }
}