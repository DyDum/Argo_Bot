module.exports = {
    name: 'rependre',
    aliases: ['rs', 'rpd'],
    utilisation: '{prefix}reprendre',
    voiceChannel: true,
    description: 'Reprendre la musique',

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Aucune musique n'est actuellement jouée ${message.author}... réessayer ? ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Musique actuelle ${queue.current.title} reprise ✅` : `Quelque chose ne va pas ${message.author}... réessayer ? ❌`);
    },
};