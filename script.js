"use strict";

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
let value = [];
let [root] = document.getElementsByTagName("html");

//defaults
root.scrollTop = 0;
$("#cal-result-value,#wt-result-value").addClass("slide");

// functions

// $("#result-value").slideUp()

$("#submit").on("click", (e) => {
   e.preventDefault();
   value[0] = $("#input_age").val();
   value[1] = $("#input_sex").val();
   value[2] = $("#input_height").val();
   value[3] = $("#input_weight").val();
   value[4] = $("#input_activity").val();

   updateResult(CaloriesRequired(value).toFixed(2),1);
	let wtDiff = Number(idealWeight(Number(value[2]),Number(value[1])).toFixed(1)) - Number(value[3])
	if (wtDiff>0) {
		updateResult(wtDiff.toFixed(1),2);
		$('.wt-text')
		.text('you need to put on to reach your ideal weight')
		$('#dietChart').attr('href','weight-gain.html')
		$('#result-img img').attr('src','icons8-thick-arrow-pointing-up-24.png')
		$('#dietChart').css('display','block')

	}else if(wtDiff<0){
		updateResult(Math.abs(wtDiff.toFixed(1)),2);
		$('.wt-text')
		.text('you need to reduce to reach your ideal weight')
		$('#dietChart').attr('href','weight-loss.html')
		$('#result-img img').attr('src','icons8-thick-arrow-pointing-down-30.png')
		$('#dietChart').css('display','block')

	}else if (wtDiff==0) {
		updateResult('0',2);
		$('.wt-text')
		.text('Your weight is ideal. Keep up with your healthy lifestyle!')
		$('#dietChart').css('display','none')
	}
   root.scrollTop = 860;
});

$("#reEnter").on("click", () => {
   $("#cal-result-value,#wt-result-value").toggleClass("slide");
});

function CaloriesRequired(value) {
   // console.log(value[1])
   switch (Number(value[1])) {
      case 1: //male
         let result1 =
            (10 * value[3] + 6.25 * value[2] - 5 * value[0] + 5) * value[4];
         return result1;

      case 2:
         let result2 =
            (10 * value[3] + 6.25 * value[2] - 5 * value[0] + -161) * value[4];
         return result2;
   }
}

function idealWeight(height, x) {
   switch (x) {
      case 1:
         // Male
         if (height > 152.4) {
            let iw = 50 + 0.91 * (height - 152.4);
            return iw;
         } else {
            let iw = 50 - 0.54 * (152.4 - height);
            return iw;
         }

      case 2:
         // Female
         if (height > 152.4) {
            let iw = 45.5 + 0.91 * (height - 152.4);
            return iw;
         } else {
            let iw = 45.5 - 0.54 * (152.4 - height);
            return iw;
         }
   }
}

// console.log(idealWeight(140.4, 2).toFixed(1));

function updateResult(val,x) {
   switch (x) {
      case 1:
         $("#cal-result-value").text(val);
         $("#cal-result-value").removeClass("slide");
         break;

      case 2:
         $("#wt-result-value").text(val);
         $("#wt-result-value").removeClass("slide");
         break;
   }
}
