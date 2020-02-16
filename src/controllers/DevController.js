const axios = require('axios');// biblioteca para consumir API
const Dev = require('../models/Dev');
const parseStringAsArray = require('../Utils/ParseStringAsArray');

module.exports = {
  async index(request,response){
    const devs = await Dev.find();
    return response.json(devs);
  },
  async store (request,response) {
    const { github_username , techs,latitude,longitude } = request.body;

    let dev = await Dev.findOne({github_username});
    
    if(!dev){
      const apiresponse = await axios.get(`https://api.github.com/users/${github_username}`); 
      
      const{name = login,avatar_url,bio} = apiresponse.data;
      
      console.log(name,avatar_url,bio);
      
      const techArray = parseStringAsArray(techs); 
      
      const location = {
        type: "Point",
        coordinates:[longitude,latitude],
      };
      
       dev = await Dev.create({
          name:github_username,
          avatar_url,
          bio,
          techs:techArray,
          location 
      })
    }
  
    
   
    return response.json(dev);
  }//caminho que sera acessado em caso do usuario acessar o caminho sem uma rota
};