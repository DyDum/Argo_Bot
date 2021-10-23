module.exports = async (client) => {
    console.log(`Connecté avec le nom ${client.user.username}\n-> Prêt sur ${client.guilds.cache.size} serveurs pour un total de ${client.users.cache.size} utilisateurs`);

    client.user.setActivity(client.config.app.playing);
};