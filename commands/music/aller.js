const ms = require('ms');

module.exports = {
    name: 'aller',
    aliases: [],
    utilisation: '{prefix}aller [time]',
    voiceChannel: true,
    description: 'Aller à un moment précis de la musique',

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique n'est actuellement jouée ${message.author}... réessayer ? ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`Le temps indiqué est supérieur à la durée de la musique ${message.author}... réessayer ? ❌\n*Essayer par exemple *5s, 10s, 20s, 1m**...*`);

        await queue.seek(timeToMS);

        message.channel.send(`Réglage du temps de la musique actuelle à **${ms(timeToMS, { long: true })}** ✅`);
    },
};