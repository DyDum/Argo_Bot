const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'liste',
    aliases: ['q', 'l'],
    utilisation: '{prefix}liste',
    voiceChannel: true,
    description:'Permet de voir la liste d\'attente',

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Aucune musique n'est actuellement jouée ${message.author}... réessayer ? ❌`);
        
        if (!queue.tracks[0]) return message.channel.send(`Pas de musique dans la file d'attente aprés celle-ci ${message.author}... réessayer ? ❌`);

        const embed = new MessageEmbed();
        const methods = ['', '🔁', '🔂'];

        embed.setColor('RED');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setAuthor(`Liste d'attente - ${message.guild.name} ${methods[queue.repeatMode]}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (Demandé par : ${track.requestedBy.username})`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `Et **${songs - 5}** autres sons(s)...` : `Dans la liste : **${songs}** son(s)...`;

        embed.setDescription(`Actuel ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

        embed.setTimestamp();
        embed.setFooter('La musique avant tout - Fait avec le coeur par DyDum ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};