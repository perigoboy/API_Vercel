const userService = require('../services/userService');


exports.getAll = async (req, res) => {
try {
const users = await userService.list();
res.json(users);
} catch (err) {
res.status(500).json({ error: err.message });
}
};


exports.getById = async (req, res) => {
try {
const user = await userService.get(req.params.id);
if (!user) return res.status(404).json({ error: 'Not found' });
res.json(user);
} catch (err) {
res.status(500).json({ error: err.message });
}
};


exports.create = async (req, res) => {
try {
const created = await userService.create(req.body);
res.status(201).json(created);
} catch (err) {
res.status(400).json({ error: err.message });
}
};


exports.update = async (req, res) => {
try {
const updated = await userService.update(req.params.id, req.body);
if (!updated) return res.status(404).json({ error: 'Not found' });
res.json(updated);
} catch (err) {
res.status(400).json({ error: err.message });
}
};


exports.remove = async (req, res) => {
try {
const removed = await userService.remove(req.params.id);
if (!removed) return res.status(404).json({ error: 'Not found' });
res.json({ deleted: true });
} catch (err) {
res.status(500).json({ error: err.message });
}
};