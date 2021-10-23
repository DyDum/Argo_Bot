module.exports = {
    name: 'stop',
    aliases: [],
    utilisation: '{prefix}stop',
    voiceChannel: true,
    description: 'Déconnecter le bot du salon vocal et arreter la musique',

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique n'est actuellement jouée ${message.author}... réessayer ? ❌`);

        queue.destroy();

        message.channel.send(`Musique arrétée sur le serveur, à bientôt ✅`);
    },
};