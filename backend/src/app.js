const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/api/users', userRoutes);


// health
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));


module.exports = app;


// para rodar localmente com `node src/app.js`, uncomment abaixo
if (require.main === module) {
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));
}