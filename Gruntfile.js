/*
 * grunt-nuget-install
 * https://github.com/Su/nuget-install
 *
 * Copyright (c) 2013 
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Configuration to be run (and then tested).
    xdt_config_transformation: {
		debug: {
			options: {
				source: 'test/web.config',
				transform: 'test/web.Debug.config',
				destination: 'test/webTransformed.config'
			}
		}
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.registerTask('transform', ['xdt_config_transformation']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint']);

};
