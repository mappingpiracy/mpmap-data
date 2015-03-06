var csvtojson = require('csvtojson'),
	fs = require('fs'),
	readline = require('readline');
var countries = require('./countries/countries.js');


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
		for (var d in data) {
			var item = data[d], referenceId, occurredOn, timeDay, type, action, latitude, longitude, closestCountryId,
			waterCountryId, locationDescription, vesselName, vesselType, vesselCountryId, violenceDummy;

			referenceId = item['incident_reference'];

			occurredOn = new Date(item['year'], (item['month'] - 1), item['day']);

			timeDay = item['time_day'];
			if (timeDay === 1) {
				timeDay = '6:00 AM - 12:00 PM';
			} else if (timeDay === 2) {
				timeDay = '12:01 PM - 6:00 PM';
			} else if (timeDay === 3) {
				timeDay = '6:01 PM - 12:00 AM';
			} else if (timeDay === 4) {
				timeDay = '12:01 AM - 6:00 PM';
			} else {
				timeDay = null;
			}

			type = item['incident_type_recode'];
			if (type === 0) {
				type = 'Attempted';
			} else if (type === 1) {
				type = 'Actual';
			} else {
				type = null;
			}

			action = item['incident_action_recode'];
			if (action === 1) {
				action = 'Hijacked';
			} else if (action === 2) {
				action = 'Boarded';
			} else if (action === 3) {
				action = 'Fired Upon';
			} else if (action === 4) {
				action = 'Attempted';
			} else if (action === 5) {
				action = 'Missing';
			} else if (action === 6) {
				action = 'Detaining';
			} else if (action === 10) {
				action = 'TBD';
			} else if (action === -99) {
				action = null;
			}

			latitude = item['lat_decimal_degrees'];
			longitude = item['long_decimal_degrees'];

			closestCountryId = item['closest_state_cow_code'];
			if (closestCountryId === '') {
				closestCountryId = null;
			}

			waterCountryId = item['territorial_water_status'];
			if (waterCountryId === '') {
				waterCountryId = null;
			} else {
				waterCountryId = countries.getCowId(waterCountryId)
			}

			locationDescription = item['location_description'];

			vesselName = item['vessel_name'];

			vesselType = ['TBD'];

			vesselCountryId = item['flag_cow_code'];
			if(vesselCountryId === -99) {
				vesselCountryId = [];
			} else if(vesselCountryId != Math.floor(vesselCountryId)) {	//not an integer
				if(vesselCountryId.indexOf('&') > 0) {
					vesselCountryId = vesselCountryId.replace(' & ', ',');
				} 
				vesselCountryId = vesselCountryId.split(',');
			} else {
				vesselCountryId = [vesselCountryId];
			}

			violenceDummy = item['violence_dummy'];
			if(violenceDummy === 1) {
				violenceDummy = 'true';
			} else if(violenceDummy === 0) {
				violenceDummy = 'false';
			} else {
				violenceDummy = null;
			}

			var row = [{
				col: 'reference_id',
				val: referenceId
			}, {
				col: 'occured_on',
				val: occurredOn
			}, {
				col: 'time_day',
				val: timeDay
			}, {
				col: 'type',
				val: type
			}, {
				col: 'action',
				val: action
			}, {
				col: 'latitude',
				val: latitude
			}, {
				col: 'longitude',
				val: longitude
			}, {
				col: 'closest_country_id',
				val: closestCountryId
			}, {
				col: 'water_country_id',
				val: waterCountryId
			}, {
				col: 'location_description',
				val: locationDescription
			}, {
				col: 'vessel_name',
				val: vesselName
			}, {
				col: 'vessel_type',
				val: vesselType
			}, {
				col: 'vessel_country_id',
				val: vesselCountryId
			}, {
				col: 'violence_dummy',
				val: violenceDummy
			}];

			rowInsert('incident', row);

		}

	});

}


// Generic insert statement
function rowInsert(table, row) {
	
	row.forEach(function(element) {
		console.log(element);
		
	});

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