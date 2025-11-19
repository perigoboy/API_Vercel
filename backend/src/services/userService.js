const userModel = require('../models/userModel');


exports.list = async () => {
return userModel.findAll();
};


exports.get = async (id) => {
return userModel.findById(id);
};


exports.create = async (data) => {
if (!data.name) throw new Error('name is required');
return userModel.create(data);
};


exports.update = async (id, data) => {
return userModel.update(id, data);
};


exports.remove = async (id) => {
return userModel.remove(id);
};