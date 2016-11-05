const config = require ('./config');

const massive = require('massive');

const connectionString = "postgres://postgres:" + config.password + "@localhost/Ecommerce";
const massiveInstance = massive.connectSync({connectionString : connectionString});

module.exports = massiveInstance;
