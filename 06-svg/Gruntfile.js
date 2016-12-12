'use strict'

const fs = require('fs')
const serveStatic = require('serve-static')

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt)
    require('time-grunt')(grunt)

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        php: {
            dist: {
                options: {
                    hostname: '127.0.0.1',
                    port: 9000,
                    base: 'dist', // Project root
                    keepalive: false,
                    open: true
                }
            }
        },
        clean: {
            dist: ['./dist']
        },
        sass: { 
            dist: { 
                files: { 
                    './dist/styles/main.css': './src/styles/main.scss'
                }
            }
        },
        cssmin: {
          target: {
            files: {
              './dist/styles/main.min.css': './dist/styles/main.css'
            }
          }
        },
        copy: {
            dist: {
                files: [
                    // php
                    {
                        expand: true,
                        cwd: 'src',
                        src: 'index.php',
                        dest: './dist/'
                    },
                    {
                        expand: true,
                        cwd: 'src/pages',
                        src: '**/*.php',
                        dest: './dist/pages/'
                    },
                    {
                        expand: true,
                        cwd: 'src/structure',
                        src: '**/*.php',
                        dest: './dist/structure/'
                    },
                    // js
                    {
                        expand: true,
                        cwd: 'src/js',
                        src: 'main.js',
                        dest: './dist/js/'
                    },
                ]

            }
        },

        watch: {
            static: {
                files: ['./src/**/*.scss', './src/**/*.php', './src/**/*.js',],
                tasks: ['copy', 'sass:dist', 'cssmin'],
                options: {
                    livereload: true
                }
            }
        }
    })
    grunt.registerTask('serve', ['php:dist', 'watch'])
    grunt.registerTask('default', ['clean', 'sass:dist', 'cssmin', 'copy'])
    grunt.registerTask('start', ['default', 'serve'])

}
