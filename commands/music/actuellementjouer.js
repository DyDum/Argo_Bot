const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'actuel',
    aliases: ['np'],
    utilisation: '{prefix}actuel',
    voiceChannel: true,
    description: 'Avoir les infos sur la musique actuelle',

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique n'est actuellement jouée ${message.author}... réessayer ? ❌`);

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setThumbnail(track.thumbnail);
        embed.setAuthor(track.title, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();
        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        embed.setDescription(`Volume **${queue.volume}**%\Durée **${trackDuration}**\nBoucle **${methods[queue.repeatMode]}**\nDemandé par ${track.requestedBy}`);

        embed.setTimestamp();
        embed.setFooter('La musique avant tout - Fait avec le coeur par DyDum ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};