var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

//I added
var ctrlPizzas = require('../controllers/pizzas');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);


//I added below here
/* Pizza Locations pages */
router.get('/pizza', ctrlPizzas.pizzahomelist);
router.get('/pizza/info', ctrlPizzas.pizzaInfo);
router.get('/pizza/review/new', ctrlPizzas.pizzaaddReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

//I added
//router.get('/pizza', ctrlPizza.pizza);

module.exports = router;

