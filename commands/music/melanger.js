module.exports = {
    name: 'melanger',
    aliases: ['mlg'],
    utilisation: '{prefix}melanger',
    voiceChannel: true,
    description: 'Permet de melanger les musiques de la liste d\'attente',

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique n'est actuellement jouée ${message.author}... réessayer ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`pas de musique dans la file d'attente après celle-ci ${message.author}... réessayer ? ❌`);

        await queue.shuffle();

        return message.channel.send(`File d'attente mélangée **${queue.tracks.length}** musique(s) ! ✅`);
    },
};