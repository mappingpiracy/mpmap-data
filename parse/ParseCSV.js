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


/*****************************************************

	Call the functions that should execute

*****************************************************/

//printFile();
//getColumnNames();
agregateColumnValues();


/*****************************************************

	Parsing and data manipulation functions

*****************************************************/


// Print the file at fileName in JSON format
function printFile() {
	csvFileToJSON(function(data) {
		console.log(data);
	});
}


// Convert the file at fileName to a JSON object
function csvFileToJSON(callback) {
	var fileStream = fs.createReadStream(fileName);
	var csvConverter = new Converter({
		constructResult: true
	});
	fileStream.pipe(csvConverter);

	csvConverter.on("end_parsed", function(jsonObj) {


		callback(jsonObj);
	});
}

function getColumnNames() {
	csvFileToJSON(function(data) {
		for(var col in data[0]) {
			console.log(col);
		}
	});
}

// Print each column name that was specified as a CL argument and all unique values in the column
function agregateColumnValues() {

	var values = {},
		columns = [],
		i, j, prop, val;

	csvFileToJSON(function(data) {
		for (prop in data[0]) {
			values[prop] = {};
		}

		for (i = 1; i < data.length; i++) {
			for (prop in data[i]) {
				val = data[i][prop];
				if(val in values[prop]) {
					values[prop][val]++;
				} else {
					values[prop][val] = 1;
				}
			}
		}

		for (i = 3; i < argv.length; i++) {
			console.log(argv[i]);
			console.log(values[argv[i]]);
			val = '';
			for(prop in values[argv[i]]) {
				if(prop.length === 0) prop = 'NULL';
				val += prop + ' | ';
			}
			console.log(val);
		}
	});


}

function formatName(name) {
	name = name.toLowerCase();
	name = name.replace(' ', '_');
	name = name.replace('\'', '');
	return name;
}