// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const config = require('./config');
const acessorios = require('./models/acessorios');
const app = express();
const port = 3000;
// Configurar o body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Conectar ao banco de dados
const banco = new Sequelize(config.development);
// Importar o modelo Produto
const Acessorio = banco.define('./models/acessorios');
banco.sync().then(() => {
console.log('Modelo sincronizado com o banco de dados.');
});
// Rotas
app.get('/acessorios', async (req, res) => {
const acessorios = await Acessorio.findAll();
res.json(acessorios);
});
app.post('/acessorios', async (req, res) => {
const { nome, descricao, preco } = req.body;
const acessorios = await Acessorio.create({ nome, descricao, preco });
res.json(acessorios);
});
app.put('/acessorios/:id', async (req, res) => {
const { id } = req.params;
const { nome, descricao, preco } = req.body;
await Acessorio.update({ nome, descricao, preco }, { where: { id } });
const acessorios = await Acessorio.findByPk(id);
res.json(acessorios);
});
app.delete('/acessorios/:id', async (req, res) => {
const { id } = req.params;
await Acessorio.destroy({ where: { id } });
res.json({ message: 'Acessório deletado com sucesso!' });
});
// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor rodando na porta ${port}`);
});

