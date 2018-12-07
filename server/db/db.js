const MongooseConnectionConfig = require('mongoose-connection-config');
const opts = require('./settings');
let mongoose = require('mongoose');

const mcc = new MongooseConnectionConfig(opts);
mongoose.connect(mcc.getMongoUri(), opts.connectOptions);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Hello, we're connected!");
});