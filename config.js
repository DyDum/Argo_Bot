module.exports = {
    app: {
        px: '*',
        token: 'ODk3NzU5ODM3OTQ4MDg4MzIx.YWaWAA.IupuIBaCDxRRWv2UFwm1aA88SWA',
        playing: 'par DyDum'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 35,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};