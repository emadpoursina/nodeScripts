/**
 * Generate an sql command from json file
 */

const fs = require("fs");
const readLine = require("readline");
const { spawn } = require("child_process");
const { Readable } = require("stream");

const xclip = spawn('xclip', [ '-sel', 'clip']);

const rl = readLine.createInterface({
	input: process.stdin,
});

rl.question('enter the file path: ', (filePath) => {
	const json = JSON.parse(fs.readFileSync(filePath, "utf8"));
	let query = "INSERT INTO custome_symbole_info VALUES\n";
	const end = json.length;

	for(let i = 0;i < end;i++) {
		if(i != end-1){
			query += "(null, " + json[i][0] + ",\"" + json[i][1] + "\"),\n";
		}else {
			query += "(null, " + json[i][0] + ",\"" + json[i][1] + "\");\n";
		}
	}

	xclip.stdin.write(query);
	xclip.stdin.end();

});

