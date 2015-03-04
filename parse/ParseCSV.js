var csvtojson = require('csvtojson'),
	fs = require('fs'),
	readline = require('readline');


// Error check
if(process.argv.length < 3) {
	console.error("Not enough arguments");
	return;
}

// Some global variables
var Converter = csvtojson.core.Converter;
var fileName = process.argv[2];

parseFile();

function parseFile() {
	csvFileToJSON(function(data) {
		console.log(data);
	});
}

function csvFileToJSON(callback) {
	var fileStream = fs.createReadStream(fileName);
	var csvConverter = new Converter({constructResult: true});
	fileStream.pipe(csvConverter);

	csvConverter.on("end_parsed",function(jsonObj){
	   callback(jsonObj);
	});
}