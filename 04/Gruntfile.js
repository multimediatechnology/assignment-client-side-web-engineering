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
          './dist/public/client.js': ['./src/public/client.js'],
        },
        options: {
          transform: ['hbsfy', 'babelify']
        }
      },
      dist: {
        files: {
          './dist/public/client.js': ['./src/public/client.js'],
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
            cwd: './node_modules/chessboardjs/www/css',
            src: 'chessboard.css',
            dest: './dist/public/styles'
          },
          {
            expand: true,
            cwd: 'src/public/styles',
            src: '*.css',
            dest: './dist/public/styles'
          },
          // images
          {
            expand: true,
            cwd: './node_modules/chessboardjs/www/img',
            src: '**/*',
            dest: './dist/public/img'
          },
          // html
          {
            expand: true,
            cwd: 'src',
            src: 'public/*.html',
            dest: './dist/'
          },
          // js
          {
            expand: true,
            cwd: './node_modules/chessboardjs/www/releases/0.3.0/js',
            src: 'chessboard-0.3.0.min.js',
            dest: './dist/public/lib/'
          },
          {
            expand: true,
            cwd: './node_modules/chess.js',
            src: 'chess.min.js',
            dest: './dist/public/lib/'
          },
          {
            expand: true,
            cwd: './node_modules/jquery/dist/',
            src: 'jquery.min.js',
            dest: './dist/public/lib/'
          },
          {
            expand: true,
            cwd: './node_modules/socket.io-client/',
            src: 'socket.io.min.js',
            dest: './dist/public/lib/'
          },
          {
            expand: true,
            cwd: 'src',
            src: 'app.js',
            dest: './dist/'
          },
        ]

      }
    },

    watch: {
      static: {
        files: ['./src/**/*.css', './src/public/*.html'],
        tasks: ['copy'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['./src/**/*.js', './src/**/*.hbs'],
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
