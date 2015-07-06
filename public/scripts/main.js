$(document).ready(function(){
	var marker;

	// add hotel
	$('.hotel-btn').on('click', 'button', function(){
		currentDay = parseInt($('.current-day').text());
		var $hotelSelected = $(this).closest('.hotel-btn').find('select').val();
		if(days[currentDay-1].Hotel.name !== ""){
			return;
		}else{
			$('.hotel-item').append(addElement($hotelSelected));
			

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
		}
	});

	// remove hotel
	$('.hotel-item').on('click', 'button', function(){
		var removeButton = $(this);
		var text = removeButton.prev().text();

		currentDay = parseInt($('.current-day').text());
		days[currentDay-1].Hotel.name = "";
		days[currentDay-1].Hotel.marker.setMap(null);
		days[currentDay-1].Hotel.marker = null;

		removeButton.closest('.itinerary-item').empty();
	})

	// add restaurants
	$('.restaurant-btn').on('click', 'button', function(){
		// var currentDay = parseInt($('.current-day').text());
		var $restaurantSelected = $(this).closest('.restaurant-btn').find('select').val();

		$('.restaurant-item').append(addElement($restaurantSelected));

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

	});

	// remove restaurants
	$('.restaurant-item').on('click', 'button', function(){
		var removeButton = $(this);
		var text = removeButton.prev().text();

		currentDay = parseInt($('.current-day').text());
		// refactor by making a function for emptying the DOM
		days[currentDay-1].Restaurant.forEach(function(restaurant, index){
			if(restaurant.name === text){
				removeButton.closest('.itinerary-item').empty();
				days[currentDay-1].Restaurant[index].name = "";
				days[currentDay-1].Restaurant[index].marker.setMap(null);
				days[currentDay-1].Restaurant[index].marker = null;
			}
		})
	})

	// add things to do
	$('.todo-btn').on('click', 'button', function(){
		var $todoSelected = $(this).closest('.todo-btn').find('select').val();

		// add if statement so you can't add the same activity twice

		$('.todo-item').append(addElement($todoSelected));

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

	// remove thing to do
	$('.todo-item').on('click', 'button', function(){
		var removeButton = $(this);
		var text = removeButton.prev().text();

		currentDay = parseInt($('.current-day').text());
		// refactor by making a function for emptying the DOM
		days[currentDay-1].ThingsToDo.forEach(function(thingToDo, index){
			if(thingToDo.name === text){
				removeButton.closest('.itinerary-item').empty();
				days[currentDay-1].ThingsToDo[index].name = "";
				days[currentDay-1].ThingsToDo[index].marker.setMap(null);
				days[currentDay-1].ThingsToDo[index].marker = null;
			}
		})
	})

	// switch day shown or add new day
	$('.day-buttons').on('click', 'button', function(){
		var newDay = $(this);
		var text = newDay.text();
		if(text === '+'){
			addDay();
		}else{
			setDay(parseInt(text), newDay, true);
			//newDay.addClass('.current-day');
		}
	})	

})

		
		

	


	


	    
		   