// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Provisional 

const express = require('express');
const morgan = require('morgan');
const app = express();
const http = require('http');	//Funcionamiento con http
const path = require('path');	//Necesario para indicar rutas
const PORT = process.env.PORT || 3000;	//Ruta especifica o por defecto
const bodyParser = require('body-parser');	//Conversion de formatos
const userService = require('./routes/user-service');	
const users = require('./routes/users');	//Funciones de users
const cors = require('cors');	//Gestor de permisos

app.use('/users', users);
app.use(morgan('dev')); //middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

const server = http.createServer(app);

userService.connectDb(function (err) {	// DB conection
	if(err){
		console.log('Could not connect with MongoDB - audienceService');
		process.exit(1);
	}
});

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

app.listen(PORT, () =>{

  console.log("Server on port ${PORT}");
  
})