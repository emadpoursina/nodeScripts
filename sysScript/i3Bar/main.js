const { exec } = require("child_process");
const Reporter = require("./modules/reporter");
const report = new Reporter("/home/emad/FUEL/gameOfLife/report");

function shell(command) {
	return new Promise((resolve, reject) => {
		exec(command, (err, result) => { resolve(result); reject(new Error(err)); });
	});
}

async function battryGenerator() {
	let battryO = await shell("acpi");
	battryO = battryO.split(",");
	battryO[0] = battryO[0].slice(11);
	battryO[1] = battryO[1].trim().substring(0, battryO[1].indexOf("%"));
	if(!battryO[2])
		battryO[2] = "00:00:00 ";
	battryO[2] = battryO[2].trim();

	const battry = {
		status: battryO[0],
		percentage: battryO[1],
		remainingTime: battryO[2],
	}

	const final = {
		name: "Battry",
		full_text: `Battry: ${battry.percentage} : ${battry.status}`,
	};

	if(battry.status == "Charging"){
		final.background = "#2cfc03";
		final.color = "#000000"
	}else if(battry.percentage.substring(0, battry.percentage.indexOf("%")) < 15) {
		final.urgent = true;
	}

	return final;
}

async function dateGenerator() {
	let date = await shell("date");
	date = date.trim();
	date = date.split(" ");
	date.splice(2, 1, date[4].split(":"));
	date.splice(4, 2);
	const final = {name: "Date", full_text: `${date[0]} ${date[3]}/${date[1]}/${date[4]} - ${date[2].toString()}`};

	return final;
}

console.log('{ "version": 1 }');
console.log("[");
console.log("[],");

setInterval(async () => {
	const battry = await battryGenerator();
	const date = await dateGenerator();

	console.log(`[${JSON.stringify(battry)}, ${JSON.stringify(date)}],`);

}, 1000);
