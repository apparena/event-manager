"use strict";

/*eslint-env es6*/
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authPlugin = {
  register: (server, options, next) => {
    server.route({
      method: 'POST',
      path: '/login',
      config: {
        validate: {
          payload: {
            email: Joi.string(),
            password: Joi.string()
          }
        },
      },
      handler: ((request, reply) => {
        let user = {
          email: request.payload.email
        };
        request.app.db.query('SELECT * FROM user WHERE ? LIMIT 1', user, ((error, results, fields) => {
          if (results.length === 1) {
            bcrypt.compare(request.payload.password, results[0].password)
              .then((res) => {
                if (res) {
                  return reply(jwt.sign({ email: request.payload.email }, 'shhhhh'));
                }
                return reply("wrong_password");
              })
              .catch((err) => {
                return reply("error");
              });
          } else {
            return reply("no_user");
          }
        }));
      })
    });

    server.route({
      method: 'POST',
      path: '/register',
      config: {
        validate: {
          payload: {
            email: Joi.string(),
            password: Joi.string()
          }
        },
      },
      handler: ((request, reply) => {
        bcrypt.hash(request.payload.password, 10)
          .then((hash) => {
            // Store hash in your password DB.
            let user = {
              email: request.payload.email,
              password: hash,
            };
            request.app.db.query('INSERT INTO user SET ?', user, ((error, results, fields) => {
              if (error) {
                throw error
              } else {
                return reply("Register");
              }
            }));
          });
      })
    });

    next();
  }
};

authPlugin.register.attributes = {
  name: "AuthPlugin",
  version: "0.0.1"
};

module.exports = authPlugin;
