var router = require('express').Router();
var Promise = require('bluebird');
var models = require('../models');


router.get('/', function(req, res, next) {
 var promisifiedFind = function (collection){
 return new Promise (function (resolve, reject){
   collection.find(function (err, data) {
     if (err) reject(err);
     else resolve(data);
   })
 })
}


 var promises = [
   promisifiedFind(models.Hotel),
   promisifiedFind(models.Restaurant),
   promisifiedFind(models.ThingToDo)
 ];
 Promise.all(promises).spread( function (hotelData, restaurantData, todoData){
   res.render('index', {all_hotels: hotelData, all_restaurants: restaurantData, all_things_to_do: todoData});  
 })

});
module.exports = router;

/*router.get('/',
	function (req, res, next) {
		models.Hotel
			.find({})
			.exec(function (err, hotels) {
				// attach data to res.locals and then go on
				res.locals.all_hotels = hotels;
				next();
			});
	},
	function (req, res, next) {
		models.ThingToDo
			.find({})
			.exec(function (err, thingsToDo) {
				// attach data to res.locals and then go on
				res.locals.all_things_to_do = thingsToDo;
				next();
			});
	},
	function (req, res, next) {
		models.Restaurant
			.find({})
			.exec(function (err, restaurants) {
				// attach data to res.locals and then go on
				res.locals.all_restaurants = restaurants;
				next();
			});
	},
	function (req, res) {
		// all the data attached to res.locals will now be passed to the index template
		res.render('index', {all_hotels: res.locals.all_hotels, all_restaurants: res.locals.all_restaurants, all_things_to_do: res.locals.all_things_to_do});
	});*/


