/*
 * grunt-xdt-config-transformation
 * https://github.com/kanema/grunt-xdt-config-transformation
 *
 * Copyright (c) 2014 
 * Licensed under the MIT license.
 */

'use strict';

var exec = require('child_process').exec;
var path = require('path');
var ctt_bin = '../bin/ctt.exe';

module.exports = function(grunt) {

	grunt.registerMultiTask('xdt_config_transformation', 'XDT Transformation Tool for Grunt.', function() {
  
		if (process.platform !== "win32") {
			grunt.log.warn('Only valid in windows, sorry :(.');
			return;
		}

		ctt_bin = path.join(__dirname, ctt_bin);

		var cb = this.async();
		var options = this.options();
		
		var args = [ctt_bin, 'source:"'+options.source+'"', 'transform:"'+options.transform+'"', 'destination:"'+options.destination+'"', 'pw'];
		
		grunt.util.spawn({
			cmd: args.shift(),
			args: args,
			opts: {
				stdio: 'inherit'
			}
		},
		function (error, result, code) {
			grunt.log.writeln('File "' + options.destination + '" created.');
		});
	});

};
