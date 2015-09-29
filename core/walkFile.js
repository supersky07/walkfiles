'use strict'
var fs = require('fs');
var os = require('os');

var allExtension = [],
	allFiles = [],
	isWin = os.type().indexOf('Windows') > -1 ? true : false;

module.exports = function (oripath, extension) {
	if(!fs.existsSync(oripath) || !fs.statSync(oripath).isDirectory()){
        console.log('The path must be a directory!');
	    return false;
    }

    if (extension && extension != '*') {
    	if (extension.indexOf('|') > -1) {
    		allExtension = extension.split('|');
    	} else {
    		allExtension.push(extension);
    	}
    }
	
	getAllFiles(oripath);

	return allFiles;
};

var getAllFiles = function (path){
	var dirList = fs.readdirSync(path);
    dirList.forEach(function(item){
    	if(item.indexOf('.svn') == -1){
			var fullPath = path+ '/' + item;
			if (isWin) {
	    		fullPath = path+ '\\' + item;
			}
	        
			if (fs.statSync(fullPath).isDirectory()) {
	            getAllFiles(fullPath);
	        } else {
	        	var item_suffix = getExtension(fullPath);
	        	
	        	if (allExtension.length > 0 && !isInArr(allExtension, item_suffix)) {
	        		return;
	        	}

	        	allFiles.push(fullPath);
	        }
	    }
    });
};
var getExtension = function(filePath) {
    var reg = /(\w+)\.(\w+)$/i;
    var result = filePath.match(reg);

    if (!result) {
        return false;
    }

    var suffix = result[2];
    return suffix;
};
var isInArr = function (arr, item) {
	var flag = false;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == item) {
			flag = true;
			break;
		}
	}
	return flag;
};