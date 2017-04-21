"use strict";

/*eslint-env es6*/
const mysql = require('hapi-plugin-mysql');
const Joi = require('joi');
const plugin = {};

plugin.register = (server, options, next) => {

  server.register({
    register: mysql,
    options: {
      host: "localhost",
      user: "root",
      password: "root",
      database: "event-manager"
    }
  }, ((err) => {
    if (err) console.error(err);
  }));

  server.route({
    method: 'GET',
    path: '/events',
    handler: ((request, reply) => {
      request.app.db.query('SELECT * FROM events', ((error, results, fields) => {
        // pull id out of value and use as key
        // let mapped = results.reduce((map, obj) => {
        //     map[obj.id] = obj;
        //     delete map[obj.id].id;
        //     return map;
        // }, {});
        // return reply(mapped);
        return reply(results);
      }));
      // return reply('ok'); // TODO @VK okay to reply in callback?
    })
  });

  server.route({
    method: 'POST',
    path: '/events',
    config: {
      validate: {
        payload: {
          name: Joi.string()
        }
      },
    },
    handler: ((request, reply) => {
      let event = {
        name: request.payload.name || "UNKNOWN"
      };
      request.app.db.query('INSERT INTO events SET ?', event, ((error, results, fields) => {
        if (error) {
          throw error
        } else if (results.insertId) {
          request.app.db.query('SELECT * FROM events WHERE id = ?', results.insertId, ((error, results, fields) => {
            return reply(results[0]);
          }));
        } else {
          throw "new events not found in db";
        }
      }));
    })
  });

  server.route({
    method: 'GET',
    path: '/mysql-test',
    handler: ((request, reply) => {
      request.app.db.query('SELECT * FROM events', ((error, results, fields) => {
        //return reply(results);
        //console.log(results);
      }));
      return reply('ok');
    })
  });

  next();
};


plugin.register.attributes = {
  name: "DBPlugin",
  version: "0.0.1"
};

module.exports = plugin;
