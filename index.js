'use strict'

var walkFile = require('./core/walkFile.js');

module.exports = doWalk;

function doWalk (path, extension) {
	if (!path || path == '') {
		console.log('Error:');
        console.log('The file path is necessary!');
		return;
	} 
		
	var fileList = walkFile(path, extension);
	if (fileList) {
		//console.log('Found ' + fileList.length + ' files: ');
		//console.log(fileList.join('\n\r'));
		return fileList;
	}
};