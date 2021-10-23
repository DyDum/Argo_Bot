const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'boucle',
    aliases: ['lp', 'repeter'],
    utilisation: '{prefix}boucle <queue>',
    voiceChannel: true,
    description: 'Jouer en boucle la file d\'attente',

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique n'est actuellement jouée ${message.author}... réessayer ? ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Vous devez d'abords désactiver la musique actuelle dans la boucle (${client.config.app.px}loop) ${message.author}... réessayer ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Boucle **${queue.repeatMode === 0 ? 'désactiver' : 'activer'}** toute la file d'attente sera répétée à l'infini 🔁` : `Quelque chose ne va pas ${message.author}... réessayer ? ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Vous devez d'abords désactiver la musique actuelle dans la boucle (${client.config.app.px}loop queue) ${message.author}... réessayer ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Boucle **${queue.repeatMode === 0 ? 'désactivée' : 'activée'}** La musique actuelle va être répétée à l'infini 🔂` : `Quelque chose ne va pas ${message.author}... réessayer ? ❌`);
        };
    },
};