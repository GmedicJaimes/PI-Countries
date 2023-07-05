const { Router } = require('express');
const { searchHandler, idByHandler, 
} = require('../controllers/handlerCountries');


const getAllCountries = require('../controllers/getAllCountries');

const countriesRouter = Router();

countriesRouter.get('/', searchHandler);

countriesRouter.get('/:idPais', idByHandler);//params

// countriesRouter.get('/', nameByHandler); //query

countriesRouter.get('/getAllCountries', getAllCountries)

module.exports = countriesRouter;