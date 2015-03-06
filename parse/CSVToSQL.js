var csvtojson = require('csvtojson'),
	fs = require('fs'),
	readline = require('readline');


// Error check
if (process.argv.length < 3) {
	console.error("Not enough arguments");
	return;
}

// Some global variables
var Converter = csvtojson.core.Converter;
var fileName = process.argv[2];
var argv = process.argv;



insertAll();



// parse spreadsheet and create insert statement
function insertAll() {

	csvFileToJSON(fileName, function(data) {
		for(var d in data) {
			var item = data[d];

			var referenceId = item['incident_reference'];

			var occurredOn = new Date(item['year'], (item['month'] - 1), item['day']);

			var timeDay = item['time_day'];
			if(timeDay === 1) {
				timeDay = '6:00 AM - 12:00 PM';
			} else if(timeDay === 2) {
				timeDay = '12:01 PM - 6:00 PM';
			} else if(timeDay === 3) {
				timeDay = '6:01 PM - 12:00 AM';
			} else if(timeDay === 4) {
				timeDay = '12:01 AM - 6:00 PM';
			} else {
				timeDay = null;
			}

			var type = item['incident_type_recode'];
			if(type === 0) {
				type = 'Attempted';
			} else if(type === 1) {
				type = 'Actual';
			} else {
				type = null;
			}

			var action = item['incident_action_recode'];
			if(action === 1) {
				action = 'Hijacked';
			} else if(action === 2) {
				action = 'Boarded';
			} else if(action === 3) {
				action = 'Fired Upon';
			} else if(action === 4) {
				action = 'Attempted';
			} else if(action === 5) {
				action = 'Missing';
			} else if(action === 6) {
				action = 'Detaining';
			} else if(action === 10) {
				action = 'TBD';
			} else if(action === -99) {
				action = null;
			}

			var latitude = item['lat_decimal_degrees'];
			var longitude = item['long_decimal_degrees'];

			var closestCountryId = item['closest_state_cow_code'];
			if(closestCountryId === '') {
				closestCountryId = null;
			}

			var waterCountryId = item['territorial_water_status'];
			if(waterCountryId === '') {
				waterCountryId = null;
			}

			console.log(referenceId, occurredOn, timeDay, type, action, latitude, longitude, closestCountryId);

			// create the row object
			// var row = new incidentRow(
			// 	item['incident_reference'],
			// 	new DateTime(item['year'], (item['month'] - 1), item['day']),
			// 	timeDay,
			// 	type,
				  
			// )
		}

		// printInsertStatement(new incidentRow(

		// ))
	});

}

function incidentRow(reference_id, occurred_on, time_day, type, action, latitude, longitude, closest_country_id, water_country_id, location_description, vessel_name, vessel_type, vessel_country_id, violence_dummy) {
	this.reference_id = reference_id;
	this.occurred_on = occurred_on;
	this.time_day = time_day;
	this.type = type;
	this.action = action;
	this.latitude = latitude;
	this.longitude = longitude;
	this.closest_country_id = closest_country_id;
	this.water_country_id = water_country_id;
	this.location_description = location_description;
	this.vessel_name = vessel_name;
	this.vessel_type = vessel_type;
	this.vessel_country_id = vessel_country_id;
	this.violence_dummy = violence_dummy;
}


//print the insert statement for the passed row
function printInsertStatement(row) {

}

// Convert the file at fileName to a JSON object
function csvFileToJSON(fn, callback) {
	var fileStream = fs.createReadStream(fn);
	var csvConverter = new Converter({
		constructResult: true
	});
	fileStream.pipe(csvConverter);

	csvConverter.on("end_parsed", function(jsonObj) {


		callback(jsonObj);
	});
}