module.exports = {
    name: 'sauter',
    aliases: ['st', 'skip'],
    utilisation: '{prefix}sauter',
    voiceChannel: true,
    description: 'Sauter la musique',

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique n'est actuellement jouée ${message.author}... réessayer ? ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Musique actuelle ${queue.current.title} passée ✅` : `Quelque chose ne va pas ${message.author}... réessayer ? ❌`);
    },
};