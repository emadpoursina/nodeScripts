#!/usr/bin/env node
"use strict";

const getStdin = require('get-stdin');

const args = require('minimist')(process.)

const startEpisode = 1;
const endEpisode = 13;
const fileName = "naruto";
const url = "";


let output = "";

for (let i = startEpisode; i <= endEpisode; i++) {
	if(i < 10) {
		output += `wget -c -O ${fileName}-0${i} https://s3.my-film.pw/serial/Naruto/05-480p.x264.Dubbed.FA/Naruto.S05E0${i}.HDTV.480p.x264.Dubbed.FA.mkv;`;
	}else {
		output += `wget -c -O ${fileName}-${i} https://s3.my-film.pw/serial/Naruto/05-480p.x264.Dubbed.FA/Naruto.S05E${i}.HDTV.480p.x264.Dubbed.FA.mkv;`;	
	}
}

console.log(output);