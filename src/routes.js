const {Router} = require('express');//pegando apenas a função de rotas do express

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();//instanciando a função de rotas
routes.get('/devs',DevController.index);
routes.post('/devs',DevController.store);
routes.get('/search',SearchController.index);

module.exports = routes;