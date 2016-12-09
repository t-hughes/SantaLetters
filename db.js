

const config = require ('./config');
const massive = require('massive');
const connectionString = process.env.PSQL_DB || config.database;
const massiveInstance = massive.connectSync({connectionString : connectionString});

module.exports = massiveInstance;
