# walkfiles

Try to find files by extension of a directory!

# install
	npm install walkfiles - g

# usage
	Usage: walkfiles {options}
	Standard Options:
		--path, -p the directory which you want to search
		--extension, -e extension name, split by "|"

# example
	var walk = require('walkfiles');
	walk('some directory path', "*");
	walk('some directory path', "jade|json");

	or

	walkfiles -p 'some directory path' -e 'jade|json'
