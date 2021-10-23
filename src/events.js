const msg = require('discord.js');

player.on('error', (queue, error) => {
    console.log(`Erreur émise depuis la queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Erreur émise depuis la connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Commence à joué ${track.title} dans **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Musique ${track.title} ajoutée à la file d'attente ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('J\'ai été manuellement éjecté du canal, suppresion de la file d\'attente... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Personne n\'est dans le salon, déconnection du salon vocal... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('J\'ai fini la file d\attente ✅');
});