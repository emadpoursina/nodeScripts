const { exec } = require("child_process");

	// Run shell command
	function shell(command) {
		return new Promise((resolve, reject) => {
			exec(command, (err, result) => { resolve(result); reject(new Error(err)); });
		});
	}

	// Day Routin
	const dRoutin = {
		1:  "wash hand and face",
		2:  "brush teeth",
		3:  "stretching",
		4:  "meditation",
		5:  "vozoo",
		6:  "namaz",
		7:  "shaving",
		8:  "face medicine",
		9:  "self development",
		10: "make the coffe",
		11: "fueling + DD",
		12: "breakfast",
		13: "eat the coffe",
		14: "check hosts situation",
		15: "check personal email",
		16: "support jobs: check whatsapp - aparat - email - sb form",
		17: "water the plant (fard)",
		18: "eat the vitimine (fard)",
		19: "run",
		20: "backup mosaddeghian (saturday)",
		21: "airPlanMode",
	};

	// Noon Routin
	const NoRoutin = {
		1:  "wash hand and face",
		2:  "brush teeth",
		3:  "stretching",
		4:  "meditation",
		5:  "vozoo",
		6:  "namaz",
		7:  "shaving",
		8:  "face medicine",
		9:  "self development",
		10: "make the coffe",
		11: "fueling + DD",
		12: "breakfast",
		13: "eat the coffe",
		14: "check hosts situation",
		15: "check personal email",
		16: "support jobs: check whatsapp - aparat - email - sb form",
		17: "water the plant (fard)",
		18: "eat the vitimine (fard)",
		19: "run",
		20: "backup mosaddeghian (saturday)",
		21: "airPlanMode",
	};

	// Night Routin
	const NiRoutin = {
		1:  "wash hand and face",
		2:  "brush teeth",
		3:  "stretching",
		4:  "meditation",
		5:  "vozoo",
		6:  "namaz",
		7:  "shaving",
		8:  "face medicine",
		9:  "self development",
		10: "make the coffe",
		11: "fueling + DD",
		12: "breakfast",
		13: "eat the coffe",
		14: "check hosts situation",
		15: "check personal email",
		16: "support jobs: check whatsapp - aparat - email - sb form",
		17: "water the plant (fard)",
		18: "eat the vitimine (fard)",
		19: "run",
		20: "backup mosaddeghian (saturday)",
		21: "airPlanMode",
	};

let job = "";

// How should week go
const fWeek = {
	Saturday: {
		6:  dRoutin,
		7:  'Node.js',
		10: 'MemaryComputer',
		12: 'NoonRoutin',
		13: 'Memary',
		14: 'SarmayeNovin',
		15: 'Riyasy',
		17: 'NightRoutin',
		18: 'Moghadam',
		20: 'Mosaddeghian',
		22: 'Sleep'
	},
	Sunday: {
		6: dRoutin,
		7: "Node.js",
		10: "varzesh",
		11: "mosaddeghian",
		12: NoRoutin,
		13: "selfDevelopment, Arabic, Novel",
		14: "Memary",
		17: NiRoutin,
		18: "Riyazy",
		19: "moghadam",
		20: "santoor, varsesh",
		21: "Phisic",
	},
	Monday: {},
	Tuesday: {},
	Wednesday: {},
	Thursday: {},
	Friday: {},
}

// How week gone
const pWeek = {
	Saturday: {},
	Sunday: {},
	Monday: {},
	Tuesday: {},
	Wednesday: {},
	Thursday: {},
	Friday: {},
}

async function main() {
	let hour = parseInt(await shell('date +"%H"'));
	const weekDay = (await shell('date +"%A"')).trim();

	hour += 1;
	hour -= 1;
	flag = true;

	await shell(`notify-send ${hour}`)
	while(true) {
		job = fWeek[weekDay][hour];
		if(job) {
			await shell(`notify-send ${JSON.stringify(job)}`)
			console.log(job);
			break;
		}else {
			hour--;
		}
	}
}

main();
