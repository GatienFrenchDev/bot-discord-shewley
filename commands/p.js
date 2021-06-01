const ytdl = require('ytdl-core');
const ytStearch = require('yt-search');

module.exports = {
    name: 'p',
    description: 'joue de la musique',
    async execute(message, args) {
        const VoiceChannel = message.member.voice.channel;

        if (!VoiceChannel) return message.channel.send('Tu dois etre dans un vocal');
        if (!args.length) return message.channel.send('Tu dois donner le nom du la musique');

        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
 
        if(validURL(args[0])){
            const connection = await VoiceChannel.join();
            const stream = ytdl(args[0], {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})

            await message.reply(`Je joue maintenant ***${args[0]}***`);
            await message.delete();

            return
        }


        const connection = await VoiceChannel.join();

        const VideoFinder = async (query) => {
            const VideoResult = await ytStearch(query);

            return (VideoResult.videos.length > 1) ? VideoResult.videos[0] : null;
        }

        const video = await VideoFinder(args.join(' '));

        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            await message.reply(`Je joue maintenant ***${video.title}***`)
        }else {
            message.channel.send('pas de vidéo trouvée');
        }
    }
}