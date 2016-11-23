/*jshint esversion: 6 */

const config = require ('./config');
const massive = require('massive');
const connectionString = config.database;
const massiveInstance = massive.connectSync({connectionString : connectionString});

module.exports = massiveInstance;
