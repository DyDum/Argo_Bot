const { QueryType } = require('discord-player');

module.exports = {
    name: 'joue',
    aliases: ['p', 'play'],
    utilisation: '{prefix}joue [song name/URL]',
    voiceChannel: true,
    description: 'Permet de jouer de la musique',

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Please enter a valid search ${message.author}... try again ? ❌`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`Pas de résultats trouvé ${message.author}... réessayer ? ❌`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`Je ne peux pas rejoindre le salon vocal ${message.author}... réessayer ? ❌`);
        }

        await message.channel.send(`Chargement de votre ${res.playlist ? 'playlist' : 'musique'}... 🎧`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
        
        queue.setVolume(30)
    },
};