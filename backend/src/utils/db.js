// simples persistência em memória - substitua por DB real conforme necessidade
const store = {
users: []
};


exports.getAll = (collection) => Promise