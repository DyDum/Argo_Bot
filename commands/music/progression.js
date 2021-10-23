module.exports = {
    name: 'progression',
    aliases: ['pgr'],
    utilisation: '{prefix}progression',
    voiceChannel: true,
    description: 'Savoir la progression de la musique',

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique n'est actuellement jouée ${message.author}... réessayer ? ❌`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`Joue un live, pas de données à afficher 🎧`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};