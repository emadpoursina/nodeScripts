const fs = require("fs");
const readline = require("readline");

class Reporter {
	constructor(filePath) {
		this.filePath = filePath;	
	}

	saveToFile() {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

	rl.question("What did you do in the last hour", function(job) {
			console.log(`I did this: ${job}`);

			fs.appendFile("/home/emad/FUEL/gameOfLife/report", (err) => {
				if(err) throw err;
				console.log("Saved!");
				rl.close();
			});
		});
	}
}

module.exports = Reporter;