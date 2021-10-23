const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'aide',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}aide',
    description: 'Liste des commandes',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('Voici la liste des commandes : (Pensez bien à mettre "*" avant la commande)');
        embed.addField(`Activé - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'} (${x.description}) `).join(' \n '));

        embed.setTimestamp();
        embed.setFooter('La musique avant tout - Fait avec le coeur par DyDum ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};