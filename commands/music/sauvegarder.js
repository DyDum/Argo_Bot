module.exports = {
    name: 'sauvergarder',
    aliases: ['sv', 'save'],
    utilisation: '{prefix}sauvegarder',
    voiceChannel: true,
    description: 'Avoir le lien de la musique en mp',

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique n'est actuellement jouée ${message.author}... réessayer ? ❌`);

        message.author.send(`Vous avez sauvegarder ${queue.current.title} | ${queue.current.author} au serveur ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Je vous est envoyé le titre de la musique en message privé ✅`);
        }).catch(error => {
            message.channel.send(`Je ne peux pas vous envoyer de message privé ${message.author}... réessayer ? ❌`);
        });
    },
};