module.exports = {
    name: 'filtre',
    aliases: [],
    utilisation: '{prefix}filtre [filter name]',
    voiceChannel: true,
    description: 'Mettre un filtre sur la musique',

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique n'est actuellement jouée ${message.author}... réessayer ? ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Merci de spécifier un filtre valide ${message.author}... réessayer ? ❌\n${actualFilter ? `Filtre actuellement activés ${actualFilter} (${client.config.app.px}filtre ${actualFilter} pour désactiver).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Ce filtre n'éxixte pas ${message.author}... réessayer ? ❌\n${actualFilter ? `Filtre actuellement actifs ${actualFilter}.\n` : ''}Liste des filtres ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`Le filtre ${filter} est maintenant **${queue.getFiltersEnabled().includes(filter) ? 'activer' : 'désactiver'}** ✅\n*Rappeler vous, plus la musique est longue, plus ça va prendre de temps.*`);
    },
};