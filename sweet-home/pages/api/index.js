// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const express = require('express');
const app = express();

app.get('/', (req,res) =>{

  res.send("Operación get");

})

app.post('/user', (req,res) =>{

  res.send("Operación post");
  
})

app.put('/', (req,res) =>{

  res.send("Operación put");
  
})

app.delete('/user', (req,res) =>{

  res.send("Operación delete");
  
})