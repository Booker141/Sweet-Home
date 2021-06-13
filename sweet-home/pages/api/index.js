// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Provisional 

const express = require('express');
const morgan = require('morgan');
const app = express();
const http = require('http');	//Funcionamiento con http
const PORT = process.env.PORT || 3001;	//Ruta especifica o por defecto
const userService = require('./routes/user-service');	
const users = require('./routes/users');	//Funciones de users

app.use('/users', users);
app.use(morgan('dev')); //middlewares


const server = http.createServer(app);


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

userService.connectDb(function (err) {	//Conectado a la BD de usuarios
	if(err){
		console.log('No se ha podido conectar con MongoDB - userService');
		process.exit(1);
	}
	
	server.listen(PORT, function() {	//Escuchando en el puerto elegido
		console.log('Servidor conectado corriendo en localhost:' + PORT);
	});
});