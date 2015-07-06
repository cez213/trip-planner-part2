$(document).ready(function(){
	var marker;
	$('.hotel-btn').on('click', 'button', function(){
		var $hotelSelected = $(this).closest('.hotel-btn').find('select').val();
		
		$('.hotel-item').append('<li><span class="title">'+ $hotelSelected +'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></li>');
		/*var newHotel = addElement($hotelSelected);
		$('hotel-item').append(newHotel);*/

		var hotelLocation;
		all_hotels.forEach(function(hotel){
			if(hotel.name === $hotelSelected){
				hotelLocation = hotel.place[0].location;
			}
		})

		marker = drawLocation(hotelLocation, {
		    icon: '/images/lodging_0star.png'
		});
		
		days[currentDay-1].Hotel = {name: $hotelSelected, marker: marker};

/*		$('.btn-danger').click(function () {
			$(this).closest('li').remove();
		});	*/
	});

	$('.hotel-item').on('click', 'button', function(){
		var removeButton = $(this);
		currentDay = parseInt($('#day-title').text().match(/\d/)[0]);
		console.log(currentDay);
		for(var i = 0; i < days.length; i++){
			if(itinerary.day === currentDay){
				console.log(itinerary[day]);
			}
		} 
	})

	$('.restaurant-btn').on('click', 'button', function(){
		var $restaurantSelected = $(this).closest('.restaurant-btn').find('select').val();

		$('.restaurant-item').append('<li><span class="title">'+ $restaurantSelected +'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></li>');

		var restaurantLocation;
		all_restaurants.forEach(function(restaurant){
			if(restaurant.name === $restaurantSelected){
				restaurantLocation = restaurant.place[0].location;
			}
		})
			
		marker = drawLocation(restaurantLocation, {
	        icon: '/images/restaurant.png'
	    });
		
		days[currentDay-1].Restaurant.push({name: $restaurantSelected, marker: marker});
		console.log(days)

		$('.btn-danger').click(function () {
			$(this).closest('li').remove();
		});

	});

	var todoCounter = 0;
		
	$('.todo-btn').on('click', 'button', function(){
		var $todoSelected = $(this).closest('.todo-btn').find('select').val();

		todoCounter++;
		$('.todo-item').append('<li><span class="title" id="'+todoCounter+'">'+ $todoSelected +'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></li>');
		

		var thingToDoLocation;
		all_things_to_do.forEach(function(thingToDo){
			if(thingToDo.name === $todoSelected){
				thingToDoLocation = thingToDo.place[0].location;
			}
		})

		marker = drawLocation(thingToDoLocation, {
            icon: '/images/star-3.png'
		});

		days[currentDay-1].ThingsToDo.push({name: $todoSelected, marker: marker});

		$('.btn-danger').click(function () {
			$(this).closest('li').remove();
		});
	});

	$('.day-buttons').on('click', 'button', function(){
		var newDay = $(this);
		var text = newDay.text();
		if(text === '+'){
			addDay();
		}else{
			setDay(parseInt(text), newDay);
		}
	})	

})

		
		

	


	


	    
		   