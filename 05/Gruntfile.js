'use strict'

const fs = require('fs')
const serveStatic = require('serve-static')

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt)
  require('time-grunt')(grunt)

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      watch: {
        files: {
          './dist/extension.js': ['./src/extension.js'],
          './dist/gifs.js': ['./src/gifs.js']
        },
        options: {
          transform: ['hbsfy', 'babelify']
        }
      },
      dist: {
        files: {
          './dist/extension.js': ['./src/extension.js'],
          './dist/gifs.js': ['./src/gifs.js']
        },
        options: {
          transform: ['hbsfy', 'babelify', 'uglifyify']
        }
      }
    },

    clean: {
      dist: ['./dist']
    },


    copy: {
      dist: {
        files: [
          // styles
          {
            expand: true,
            cwd: 'src/assets/styles',
            src: '*.css',
            dest: './dist/assets/styles'
          },
          // icons
          {
            expand: true,
            cwd: './src/assets/icons',
            src: '**/*',
            dest: './dist/assets/icons'
          },
          // html
          {
            expand: true,
            cwd: 'src',
            src: '*.html',
            dest: './dist/'
          },
          // manifest
          {
            expand: true,
            cwd: 'src',
            src: 'manifest.json',
            dest: './dist/'
          },
        ]

      }
    },

    watch: {
      static: {
        files: ['./src/**/*.css', './src/*.html'],
        tasks: ['copy'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['./src/**/*.js'],
        tasks: ['browserify:watch'],
        options: {
          livereload: true
        }
      }
    }
  })

  grunt.registerTask('default', ['clean', 'copy', 'browserify:dist'])
  grunt.registerTask('start', ['default', 'watch'])

}
