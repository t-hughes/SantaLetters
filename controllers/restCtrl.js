let db = require('./../db');
// let app = require('./../server');

module.exports = {

  create: (endpoint) => {
    return (request, response) => {
      db[endpoint].insert(request.body, (dbError, dbResponse) => {
        if (dbError) { response.status(500).send(dbError); }
        else { response.status(201).send(dbResponse); }
      });
    };
  },

  read: (endpoint) => {
    return (request, response) => {
      db[endpoint].find(+request.params.id, (dbError, dbResponse) => {
        if (dbError) { response.status(404).send(dbError); }
        else { response.status(200).send(dbResponse); }
      });
    };
  },

  readList: (endpoint) => {
    return (request, response) => {
      db.run(`select * from ${endpoint}`, (dbError, dbResponse) => {
        if (dbError) { response.status(500).send(dbError); }
        else { response.status(200).send(dbResponse); }
      });
    };
  },

  update: (endpoint) => {
    return (request, response) => {
      db[endpoint].update(request.body, (dbError, dbResponse) => {
        console.log(dbError);
        console.log(dbResponse);

        if (dbError) { response.status(500).send(dbError); }
        else { response.status(201).send(dbResponse); }
      });
    };
  },

  delete: (endpoint) => {
    return (request, response) => {
      db.run(`delete from ${endpoint} where ${endpoint.slice(0,-1)}_id = ${request.params.id}`, (dbError, dbResponse) => {
        if (dbError) { response.status(500).send(dbError); }
        else { response.status(200).send(dbResponse); }
      });
    };
  },
};
