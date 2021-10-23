module.exports = {
    name: 'retour',
    aliases: ['rt'],
    utilisation: '{prefix}retour',
    voiceChannel: true,
    description: 'Jouer la dernière musique écoutée',

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique n'est jouée actuellement ${message.author}... réessayer ? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Aucune musique n'a été joué avant ${message.author}... réessayer ? ❌`);

        await queue.back();

        message.channel.send(`Rejoue la **dernière** musique ✅`);
    },
};