module.exports = function(grunt) {

    var continuousIntegrationMode = grunt.option('ci') || false;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		jshint: {
		  src: [
			'source/src/*.js'
		  ],
		  test: [
			'source/test/*.js'
		  ],
		  gruntfile: [
			'gruntfile.js'
		  ],
		  options: {
			curly: true,
			immed: true,
			newcap: true,
			noarg: true,
			sub: true,
			boss: true,
			eqnull: true
		  },
		  globals: {}
		},
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: continuousIntegrationMode,
                reporters: continuousIntegrationMode ? ['teamcity'] : ['progress']
            }
        },
		watch: {
		  karma: {
			files: ['source/src/*.js', 'source/test/*.js', 'gruntfile.js'],
			tasks: ['jshint', 'karma']
		  }
		}
    });
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['karma']);
};