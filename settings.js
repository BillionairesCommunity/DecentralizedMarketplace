// Default Options:
module.exports = {
    debug: false,
    host: 'localhost',
    port: 27017,
    database: 'Test',
    connectOptions: {
        db: {},
        server: {
            auto_reconnect: true
        },
        replset: {},
        user: {},
        pass: {},
        auth: {},
        mongos: {}
    }
};