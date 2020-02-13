const {Router} = require('express');//pegando apenas a função de rotas do express
const axios = require('axios')// biblioteca para consumir API
const routes = Router();//instanciando a função de rotas
const dev = require('./models/Dev')
routes.post('/devs',async(request,response) => {
  const { github_username , techs } = request.body;

  const apiresponse = await axios.get(`https://api.github.com/users/${github_username}`); 
  
  
  const{name = login,avatar_url,bio} = apiresponse.data;

  console.log(name,avatar_url,bio);
  
 const techArray = techs.split(',').map(tech => tech.trim());
  
 const devs = await dev.create({
    name:github_username,
    avatar_url,
    bio,
    techs:techArray, 
 });
 
  return response.json(devs);
});//caminho que sera acessado em caso do usuario acessar o caminho sem uma rota

module.exports = routes;