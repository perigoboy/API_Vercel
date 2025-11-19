const { v4: uuidv4 } = require('uuid');
const db = require('../utils/db');


exports.findAll = async () => {
return db.getAll('users');
};


exports.findById = async (id) => {
return db.getById('users', id);
};


exports.create = async (payload) => {
const user = { id: uuidv4(), name: payload.name, email: payload.email || '', createdAt: new Date() };
db.save('users', user);
return user;
};


exports.update = async (id, payload) => {
return db.update('users', id, payload);
};


exports.remove = async (id) => {
return db.remove('users', id);
};