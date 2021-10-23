module.exports = {
    name: 'supprimer',
    aliases: ['sup'],
    utilisation: '{prefix}supprimer',
    voiceChannel: true,
    description: 'Supprimer la file d\'attente',

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique n'est jouée actuellement ${message.author}... réessayer ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Aucune musique dans la file d'attente après celle en cours ${message.author}... réessayer ? ❌`);

        await queue.clear();

        message.channel.send(`La queue a bien été supprimée 🗑️`);
    },
};