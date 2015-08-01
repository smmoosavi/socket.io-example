function server() {
    var io = app.get('io');
    io.on('connect', function (socket) {
        console.log('connect');
    });
}

module.exports = server;