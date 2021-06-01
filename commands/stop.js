module.exports = {
    name: 'stop',
    description: 'stop',
    async execute(message, args) {
        const VoiceChannel = message.member.voice.channel;
        
        if(!VoiceChannel) return message.channel.send("Tu dois etre dans un channel pour arreter la musique !");
        await VoiceChannel.leave();
        await message.channel.send(":smiling_face_with_tear: `Je quitte le vocal !`")
    }
}