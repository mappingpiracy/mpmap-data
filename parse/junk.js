type("string-no-spaces");
type("string with spaces");
type(99);
type(-1);


function type(s) {
	console.log(s);
	if(Math.floor(s) === s) {
        console.log("  int");
	} else {
        	console.log('  string');
	}
}
