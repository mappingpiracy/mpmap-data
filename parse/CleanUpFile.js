var fs = require('fs'),
	readline = require('readline');

cleanUpFile(process.argv);

function cleanUpFile(argv) {

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

	var firstLine = true;

	rd.on('line', function(line) {
		
		if(firstLine) {
			var array = line.split(',');
			for(var i = 0; i < array.length; i++) {
				array[i] = array[i].toLowerCase();
				array[i] = array[i].replace(/ /g,"_");
			}
			line = array.join();
			firstLine = false;
		}

		if(line.length > 0) {
			console.log(line);
		}

	});

}
