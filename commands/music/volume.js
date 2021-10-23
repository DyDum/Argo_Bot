const maxVol = client.config.opt.maxVol;

let vol = 0.50
module.exports = {
    name: 'volume',
    aliases: ['vol', 'v'],
    utilisation: `{prefix}volume [1-100]`,
    voiceChannel: true,
    description: 'Modifier le volume de la musique (Défaut : 30)',

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique n'est actuellement jouée ${message.author}... réessayer ? ❌`);

        let vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Le volume actuel est ${queue.volume} 🔊\n*Pour changer le volume, choisir une valeur entre **1** et **100**.*`);

        if (queue.volume === vol) return message.channel.send(`Le volume que vous souhaitez modifier est déjà celui en cours ${message.author}... réessayer ? ❌`);

        if (vol < 0 || vol > 100) return message.channel.send(`Le nombre entré n'est pas valide. Entrer une nombre entre **1** et **100** ${message.author}... réessayer ? ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Le volume a bien été modifié à **${vol}**/**100**% 🔊` : `Quelque chose ne va pas ${message.author}... réessayer ? ❌`);
    },
};