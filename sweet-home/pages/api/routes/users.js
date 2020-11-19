// Provisional

const express = require('express');
const router = express.Router(); 
const userService = require('./user-service');

// Endpoints

// Get all endpoint implementation
router.get('/', function (req, res) {
	userService.getAll((err, users) => {
		if(err){
			res.status(500).send({msg: err});
		} else if (users === null){
			res.status(500).send({msg: "No se han encontrado usuarios"});
		} else {
			res.status(200).send(users);
		}
	});
});

// Get one endpoint implementation
router.get('/:userId', function (req, res) {
	let userId = req.params.userId;
	userService.get(userId, (err, person) => {
		if(err){
			res.status(500).send({msg: err});
		} else if(person === null){
			res.status(500).send({msg: 'No se ha encontrado el usuario con id: ${userId}'});
		} else {
			res.status(200).send(person);
		}
	});
});

// Post endpoint implementation
router.post('/', function (req, res) {
	let person = req.body;
	userService.add(person, (err, person) => {
		if(err){
			res.status(500).send({msg: err});
		} else if(person !== null){
			res.send({msg: 'Se ha añadido correctamente al usuario'});
		}
	});
});

// Put endpoint implementation
router.put('/:userId', function (req, res) {
	const userId = req.params.userId;
	const updatedUser = req.body;
	userService.update(_id, updatedUser, (err, nUpdates) => {
		if(err || nUpdates === 0) {
			res.status(500).send({msg: err});
		} else {
			res.status(200).send({msg: 'El usuario ha sido modificado correctamente'});
		}
	});
});

// Delete endpoint implementation
router.delete('/', function (req, res) {
	userService.removeAll((err) => {
		if(err){
			res.status(500).send({msg: err});
		} else {
			res.status(200).send({msg: 'Los usuarios han sido eliminados'});
		}
	});
});

// Delete one endpoint implementation
router.delete('/:userId', function (req, res) {
	let userId = req.params.userId;
	userService.remove(userId, (err) => {
		if(err){
			res.status(404).send({msg: err});
		} else {
			res.status(200).send({msg: 'El usuario con id: ${userId} ha sido eliminado correctamente'});
		}
	});
});

module.exports = router;