const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const utilisateurRoutes = require ('./routes/utilisateur');
const projetRoutes = require ('./routes/projet');



mongoose.connect('mongodb+srv://<username>:<password>@cluster0.jenu1.mongodb.net/test',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));



const app =express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/api/auth', utilisateurRoutes); 
app.use('/api/projet', projetRoutes); 
module.exports = app;
