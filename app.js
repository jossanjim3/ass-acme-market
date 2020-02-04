varexpress = require('express'),
app = express(),
port = process.env.PORT || 8080,
mongoose = require('mongoose'),
Actor = require('./api/models/actorModel'),
//Item = require('./api/models/itemModel'),
//Order = require('./api/models/orderModel'),
bodyParser = require('body-parser');
 
// MongoDB URI building
varmongoDBHostname = process.env.mongoDBHostname || "localhost";
varmongoDBPort = process.env.mongoDBPort || "27017";
varmongoDBName = process.env.mongoDBName || "ACME-Market";
varmongoDBURI = "mongodb://" + mongoDBHostname + ":" + mongoDBPort + "/" + mongoDBName;
 
mongoose.connect(mongoDBURI, {
reconnectTries:10,
reconnectInterval:500,
poolSize:10, // Up to 10 sockets
connectTimeoutMS:10000, // Give up initial connection after 10 seconds
socketTimeoutMS:45000, // Close sockets after 45 seconds of inactivity
family:4, // skip trying IPv6
useNewUrlParser:true
});
 
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
 
varroutesActors = require('./api/routes/actorRoutes');
//varroutesItems = require('./api/routes/itemRoutes'); 
//varroutesOrders = require('./api/routes/orderRoutes');
 
routesActors(app);
//routesItems(app);
//routesOrders(app);
 
console.log("Connecting DB to: " + mongoDBURI);
mongoose.connection.on("open", function (err, conn) {
app.listen(port, function () {
console.log('ACME-Market RESTful API server started on: ' + port);
 });
});
 
mongoose.connection.on("error", function (err, conn) {
console.error("DB init error " + err);
});
