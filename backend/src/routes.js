const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.index);

routes.get('/ong', OngController.index);
routes.post('/ong', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incident', IncidentsController.index);
routes.post('/incident', IncidentsController.create);
routes.delete('/incident/:id', IncidentsController.delete);


module.exports = routes;