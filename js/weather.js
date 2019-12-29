var $ = jQuery.noConflict();
​
$(document).ready( function() {
​
	const weatherEndpoint = 'https://weather.atmos.ucla.edu/scripts/wx.php';
	const weatherLink = 'https://weather.atmos.ucla.edu/';
	
	const fog = ['Fog', 'Haze'];
	
	const partCloud = ['Partly Cloudy', 'High Clouds', 'Partly Cloudy w/ Gusts',
	'Partly Cloudy w/ Wind', 'Cloudy', 'Cloudy w/ Wind Gusts', 'Cloudy w/ Wind',
	'Mostly Cloudy', 'Clouds'];
	
	const overcast = ['Chance of Showers', 'Likely Showers', 'Overcast', 'Smog',
	'Smoke', 'Dust', 'Snowflake Cold', 'Sandstorm', 'Tornado', 'Storm Warning',
	'Hurricane Warning'];
	
	const lightRain = ['Raindrops', 'Raindrop'];
	
	const rain = ['Rain', 'Heavy Rain', 'Rain w/ Wind', 'Sleet', 'Sleet Storm',
	'Snow', 'Snow Storms', 'Snow w/ Wind', 'Storm Showers', 'Thunderstorms',
	'Hail', 'Lightning', 'Frequent Showers', 'Showers', 'Snow w/ Thunderstorms',
	'Sprinkles', 'Storm w/ Showers', 'Mixed Rain', 'Tsunami', 'Hurricane'];
	
	const partSun = ['Partly Sunny', 'Partly Clear'];
	
	const sun = ['Sunny', 'Windy', 'Solar Eclipse', 'Hot',
	'Sunny w/ Light Wind', 'Clear', 'Clear Skies', 'Strong Winds', 'Earthquake',
	'Fire', 'Flood', 'Volcano', 'Small Craft Advisory', 'Gale Warning'];
	
	const moon = ['Lunar Eclipse', 'Meteor'];
	
	$.get(weatherEndpoint, function(data) {
	data = JSON.parse(data);
	data.description = data.description.trim();
	data.time        = data.time.trim();
	
	var link       = $('<a href="' + weatherLink + '"></a>');
	var icon       = 'sun';
	var is_raining = false;
	
	if ($.inArray(data.description, sun) !== -1) {
		icon = 'sun';
	}
	else if ($.inArray(data.description, rain) !== -1) {
		icon = 'rain';
		is_raining = true;
	}
	else if ($.inArray(data.description, fog) !== -1) {
		icon = 'fog';
	}
	else if ($.inArray(data.description, partCloud) !== -1) {
		icon = 'part-cloud';
	}
	else if ($.inArray(data.description, overcast) !== -1) {
		icon = 'overcast';
		is_raining = true;
	}
	else if ($.inArray(data.description, lightRain) !== -1) {
		icon = 'light-rain';
		is_raining = true;
	}
	else if ($.inArray(data.description, partSun) !== -1) {
		icon = 'part-sun';
	}
	else if ($.inArray(data.description, moon) !== -1) {
		icon = 'moon';
	}
	
	if (!is_raining && data.time != 'day') {
		icon = 'moon';
	}
	
	link = link.appendTo('#weather');
	link.append('<img src="/img/weather/' + icon + '-white.svg" alt="" />');
	link.append('<p>' + data.air_temp + '&deg;<span> and ' + data.description + '</span></p>');
	});
​
});


