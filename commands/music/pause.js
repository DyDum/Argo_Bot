module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,
    description: 'Permet de mettre en pause la musique',

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Pas de musique actuellement joué ${message.author}... réessayer ? ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Musique actuelle ${queue.current.title} mise en pause ✅` : `Quelque chose ne va pas ${message.author}... réessayer ? ❌`);
    },
};