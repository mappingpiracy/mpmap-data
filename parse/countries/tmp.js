var fs = require('fs'),
	readline = require('readline');

convertToMap(process.argv);

function convertToMap(argv) {

	if (argv.length < 3) {
		console.error("Usage: node(js) LineByLine.js fileName");
		return;
	}

	var fileName = argv[2];

	var rd = readline.createInterface({
		input: fs.createReadStream(fileName),
		output: process.stdout,
		terminal: false
	});



	var countries = {};
	var count = 0;

	rd.on('line', function(line) {

		var list = line.split(',');
		var country = {
			cowId: list[0],
			name: list[1],
			shortName: list[2]
		};

		country.name = country.name.replace(/'/g, "\\'");
		country.shortName = country.shortName.replace(/'/g, "\\'");

		countries[country.name] = country;
		count++;
		if (count === 217) {
			console.log(countries);
		}

	});



}