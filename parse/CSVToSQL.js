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

insertIncidents();

// parse spreadsheet and create insert statement
function insertIncidents() {

	csvFileToJSON(fileName, function(data) {
		for (var d in data) {
			var item = data[d],
				referenceId, date, timeDay, type, action, latitude, longitude, closestCountryId,
				waterCountryId, locationDescription, vesselName, vesselType, vesselCountryId, violenceDummy,
				vesselStatus;

			referenceId = item['incident_reference'];

			date = new Date(1993, 0, 1);
			if (Math.floor(item['year']) === item['year']) date.setFullYear(item['year']);
			if (Math.floor(item['month']) === item['month']) date.setMonth(item['month']);
			if (Math.floor(item['day']) === item['day']) date.setDate(item['day']);

			timeDay = item['time_day'];
			if (timeDay === 1) {
				timeDay = '6:01-12:00';
			} else if (timeDay === 2) {
				timeDay = '12:01-18:00';
			} else if (timeDay === 3) {
				timeDay = '18:01-00:00';
			} else if (timeDay === 4) {
				timeDay = '00:01-6:00';
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

			// if latitude or longitude is null, completely ignore it
			if (item['lat_decimal_degrees'].length === 0 || item['long_decimal_degrees'].length === 0) continue;
			latitude = item['lat_decimal_degrees'];
			longitude = item['long_decimal_degrees'];

			if (item['closest_state_cow_code'].length === 0) {
				closestCountryId = 0;
			} else {
				closestCountryId = item['closest_state_cow_code'];
			}

			waterCountryId = item['territorial_water_status'];
			waterCountryId = countries.getCowId(waterCountryId)
			if (waterCountryId === null) waterCountryId = closestCountryId;

			locationDescription = item['location_description'];

			vesselName = item['vessel_name'];

			vesselType = item['vessel_type'];
			if (vesselType === 1) {
				vesselType = 'Barge or Tug';
			} else if (vesselType === 2) {
				vesselType = 'Carrier';
			} else if (vesselType === 3) {
				vesselType = 'Chemical Tanker';
			} else if (vesselType === 4) {
				vesselType = 'Container Ship';
			} else if (vesselType === 5) {
				vesselType = 'Fishing Boat, Trawler, or Vessel';
			} else if (vesselType === 6) {
				vesselType = 'General Cargo';
			} else if (vesselType === 7) {
				vesselType = 'LNG, LPG, or Oil Tanker';
			} else if (vesselType === 8) {
				vesselType = 'Tanker or Produce Tanker';
			} else if (vesselType === 9) {
				vesselType = 'Yacht, Leisure Craft, or Passenger Ship';
			} else {
				vesselType = null;
			}

			/* 
				vessel country id is an array of integers. 
				if it is not specified as a positive integer or in rare cases
				several positive integers separated by ampersands, it should
				be set to [0]
			*/
			vesselCountryId = item['flag_cow_code'];
			if (Math.floor(vesselCountryId) === vesselCountryId && vesselCountryId > 0) {
				vesselCountryId = [vesselCountryId];
			} else if (vesselCountryId.toString().indexOf('&') > 0) {
				vesselCountryId = vesselCountryId.replace(' & ', ',');
				vesselCountryId = vesselCountryId.split(',');
			} else {
				vesselCountryId = [0];
			}

			vesselStatus = item['steaming_recode'];
			if(vesselStatus === 1) {
				vesselStatus = 'Steaming';
			} else if(vesselStatus === 2) {
				vesselStatus = 'Anchored';
			} else if(vesselStatus === 3) {
				vesselStatus = 'Berthed';
			} else if(vesselStatus === 4) {
				vesselStatus = 'Stationary';
			} else {
				vesselStatus = null;
			}

			violenceDummy = item['violence_dummy'];
			if (violenceDummy === 1) {
				violenceDummy = 'true';
			} else if (violenceDummy === 0) {
				violenceDummy = 'false';
			} else {
				violenceDummy = null;
			}

			var row = [{
				col: 'reference_id',
				val: referenceId
			}, {
				col: 'date',
				val: date,
				cast: 'timestamp'
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
				val: vesselCountryId,
				cast: 'integer[]'
			}, {
				col: 'vessel_status',
				val: vesselStatus
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
	var sql = 'INSERT INTO ' + table,
		cols = [],
		vals = [],
		tmp;

	row.forEach(function(element) {
		if (element.val instanceof Date) {
			tmp = [element.val.getFullYear(), (element.val.getMonth() + 1), element.val.getDate()].join('-');
			tmp += ' ';
			tmp += [element.val.getHours(), element.val.getMinutes(), element.val.getSeconds()].join(':');
			element.val = escapeString(tmp);
		} else if (element.val === null || element.val === '' || element.val === undefined) {
			element.val = 'NULL';
		} else if (element.val instanceof Array && element.val.length > 0) {
			element.val = 'ARRAY[' + element.val.join(',') + ']';
		} else {
			element.val = escapeString(element.val);
		}

		if (element.hasOwnProperty('cast')) {
			element.val += '::' + element.cast;
		}

		cols.push(element.col);
		vals.push(element.val);

	});

	sql += ' (' + cols.join() + ') VALUES (' + vals.join() + ');'
	console.log(sql);
}

function escapeString(s) {
	if (s === null) return 'NULL';
	s = s.toString();
	s = s.replace(/'/g, "''");
	s = s.replace(/"/g, '""');
	s = '\'' + s + '\'';
	return s;
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
