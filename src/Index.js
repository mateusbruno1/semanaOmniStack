const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express();

mongoose.connect('mongodb+srv://mateus:m@teus19**@cluster0-g0aw8.gcp.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology:true
});//conectando ao banco de dados mongoDB

app.use(express.json());
app.use(routes);


app.listen(3333);//definindo a porta de conexao