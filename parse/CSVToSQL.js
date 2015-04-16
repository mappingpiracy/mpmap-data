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

			type = item['incident_type_recode'];
			action = item['incident_action_recode'];
			
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
		
			/* 
				vessel country id is an array of integers. 
				if it is not specified as a positive integer or in rare cases
				several positive integers separated by ampersands, it should
				be set to [0]
			*/
			vesselCountryId = item['flag_cow_code'];
			if (vesselCountryId.toString().indexOf('&') > 0) {
				vesselCountryId = 0;
			}
			
			vesselStatus = item['steaming_recode'];
			
			violenceDummy = item['violence_dummy'];
			if (violenceDummy === 1) {
				violenceDummy = 'true';
			} else if (violenceDummy === 0) {
				violenceDummy = 'false';
			} else {
				violenceDummy = null;
			}

			var row = [{
				col: 'referenceId',
				val: referenceId
			}, {
				col: 'datetime',
				val: date,
				cast: 'timestamp'
			}, {
				col: 'timeOfDay',
				val: timeDay
			}, {
				col: 'incidentType',
				val: type
			}, {
				col: 'incidentAction',
				val: action
			}, {
				col: 'latitude',
				val: latitude
			}, {
				col: 'longitude',
				val: longitude
			}, {
				col: 'closestCountry',
				val: closestCountryId
			}, {
				col: 'waterCountry',
				val: waterCountryId
			}, {
				col: 'locationDescription',
				val: locationDescription
			}, {
				col: 'vesselName',
				val: vesselName
			}, {
				col: 'vesselType',
				val: vesselType
			}, {
				col: 'vesselCountry',
				val: vesselCountryId
				//, cast: 'integer[]'
			}, {
				col: 'vesselStatus',
				val: vesselStatus
			}, {
				col: 'violenceDummy',
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
			console.log(element.val);
			element.val = 'ARRAY[' + element.val.join(',') + ']';
		} else {
			element.val = escapeString(element.val);
		}

		if (element.hasOwnProperty('cast')) {
			element.val += '::' + element.cast;
		}

		cols.push('"' + element.col + '"');
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
