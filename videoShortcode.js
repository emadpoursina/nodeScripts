const { spawn } = require('child_process');
const { Readable } = require('stream');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const xclip = spawn('xclip', ['-sel', 'clip']);

rl.question('Enter the video link: ', (videoName) => {
	/*
	 * Delete the spaces and replace them with -
	 */
	//const videoNameParts = videoName.split('-');
	//videoName = '';
	//videoNameParts.forEach(videoNamePart => {
	//	videoName += videoNamePart.trim() + '-';
	//});
	
	//videoName = videoName.slice(0, videoName.lastIndexOf('-'));

	console.log(videoName);

	const shortCode = `[custome_videoPlayer src="${encodeURI('dl.mosaddeghian.com/سرمایه گذار برتر/پس از دوره/' + videoName)}"]`;

	Readable.from([shortCode]).pipe(xclip.stdin);
	//console.log(1, videoName + 'r');
	console.log(3, shortCode);
	rl.close();
});
