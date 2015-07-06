$(document).ready(function(){
	$('.hotel-btn').on('click', 'button', function(){
		var $hotelSelected = $(this).closest('.hotel-btn').find('select').val();
		
		$('.hotel-item').append('<li><span class="title">'+ $hotelSelected +'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></li>');


		var hotelLocation;
		all_hotels.forEach(function(hotel){
			if(hotel.name === $hotelSelected){
				hotelLocation = hotel.place[0].location;
			}
		})

		drawLocation(hotelLocation, {
		        icon: '/images/lodging_0star.png'
		    });

		$('.btn-danger').click(function () {
			$(this).closest('li').remove();
		});	

	});

	$('.restaurant-btn').on('click', 'button', function(){
		var $restaurantSelected = $(this).closest('.restaurant-btn').find('select').val();

		$('.restaurant-item').append('<li><span class="title">'+ $restaurantSelected +'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></li>');

		var restaurantLocation;
		all_restaurants.forEach(function(restaurant){
			if(restaurant.name === $restaurantSelected){
				restaurantLocation = restaurant.place[0].location;
			}
		})
			
		drawLocation(restaurantLocation, {
		        icon: '/images/restaurant.png'
		    });
		//push to marker array????

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

		drawLocation(thingToDoLocation, {
	            icon: '/images/star-3.png'
		});

		$('.btn-danger').click(function () {
			$(this).closest('li').remove();

		});
			
		
	});	

})

		
		

	


	


	    
		   