'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		watch: {
			files: [
				'assets/css/**/*.scss',
				'assets/js/*.js',
			],
			tasks: ['sass', 'concat'],
			options: {
				spawn: false
			}
		},

		sass: {
			options: {
				outputStyle: 'expanded', // compressed|expanded
				sourceMap: true
			},
			dist: {
				files: {
					'dist/css/main.css': 'assets/css/main.scss',
				}
			}
		},

		postcss: {
			options: {
				processors: [
					require('pixrem')(), // add fallbacks for rem units
					require('autoprefixer')(), // add vendor prefixes
					require('cssnano')() // minify the result
				]
			},
			dist: {
				src: 'dist/css/main.css'
			}
		},

		concat: {
			default: {
				src: [
					// vendor
					'node_modules/smoothscroll-polyfill/dist/smoothscroll.js',
					'node_modules/jquery/dist/jquery.js',
					'node_modules/popper.js/dist/umd/popper.js',
					'node_modules/bootstrap/dist/js/bootstrap.js',
					// website
					'assets/js/scrollStop.js',
					'assets/js/nav.js',
					'assets/js/carousel.js',
					'assets/js/scrollInteraction.js'
				],
				dest: 'dist/js/all.js'
			}
		},

		uglify: {
			options: {
				mangle: true,
				preserveComments: 'some',
				sourceMap: true
			},
			default: {
				files: {
					'dist/js/all.min.js': ['dist/js/all.js']
				}
			}
		},

		browserSync: {
			dev: {
				bsFiles: {
					src : 'dist/css/*.css'
				},
				options: {
					watchTask: true,
					server: {
						baseDir: './'
					},
					logLevel: 'debug'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-postcss');

	grunt.registerTask('default', ['browserSync', 'watch']);
	grunt.registerTask('build', ['sass', 'postcss', 'concat', 'uglify']);
};