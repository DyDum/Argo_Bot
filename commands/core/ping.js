const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',
    description: 'Latence du BOT',

    execute(client, message) {
        message.channel.send(`Dernier battement calculé ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} depuis **${client.ws.ping}ms** 🛰️`);
    },
};