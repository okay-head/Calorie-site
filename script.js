'use strict'

// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/images/analyze?imageUrl=https%3A%2F%2Fspoonacular.com%2FrecipeImages%2F635350-240x150.jpg",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "undefined"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// objects and collection
let values= []

$('button').on('click',(e)=>{
	e.preventDefault()
	values[0] = $('#input_age').val()
	values[1] = $('#input_sex').val()
	values[2] = $('#input_height').val()
	values[3] = $('#input_weight').val()
	values[4] = $('#input_activity').val()
	// #input_sex, #input_height, #input_activity,
console.log(values)
})