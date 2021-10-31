#!/usr/bin/env node
"use strict";


/**
 * It will generate wget commands for
 * downloading a series with template
 * e.g: /*S{0-9}{0-9}E{0-9}{0-9}\*\/
 */


const args = require('minimist')(process.argv.slice(2), {
	string: ["outputName", "url"],
	boolean: ["help"]	
});

if(args.help) {
	printHelp();	
}else {
	console.log('Bad arguments');
	console.log('');
	printHelp();
}

const startEpisode = 1;
const endEpisode = 13;
let output = "";

//***********************************/
function commandGenerator(startEpisode, endEpisode, outputName) {
	let output = "";

	// Generate the download command for each episode
	for (let i = startEpisode; i <= endEpisode; i++) {
		if(i < 10) {
			output += `wget -c -O ${outputName}-0${i} https://s3.my-film.pw/serial/Naruto/05-480p.x264.Dubbed.FA/Naruto.S05E0${i}.HDTV.480p.x264.Dubbed.FA.mkv;`;
		}else {
			output += `wget -c -O ${outputName}-${i} https://s3.my-film.pw/serial/Naruto/05-480p.x264.Dubbed.FA/Naruto.S05E${i}.HDTV.480p.x264.Dubbed.FA.mkv;`;	
		}
	}

	return output;
}

function printHelp() {
	console.log('Usage:');
	console.log('wget-command-generator --url={FILEURL} --startEpisode={first_episode} --endEpisode={end_episdoe}');
	console.log('');
	console.log('--help						Getting help');
	console.log('--output={FILENAME}				For setting end file name');
	console.log('						Default: outputSssEee.mp4');
	console.log('');
}