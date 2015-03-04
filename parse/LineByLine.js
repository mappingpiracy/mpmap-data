var fs = require('fs'),
	readline = require('readline');


lineByLine(process.argv);

function lineByLine(argv) {

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

	rd.on('line', function(line) {
		
		if(line.length > 0) {
			console.log(line);
		}

	});

}