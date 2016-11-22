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
          './dist/app.js': ['./src/app.js']
        },
        options: {
          transform: ['hbsfy', 'babelify']
        }
      },
      dist: {
        files: {
          './dist/public/client.js': ['./src/public/client.js'],
          './dist/app.js': ['./src/app.js'],
        },
        options: {
          transform: ['hbsfy', 'babelify', 'uglifyify']
        }
      }
    },

    clean: {
      dist: ['./dist']
    },

    connect: {
      server: {
        options: {
          base: './dist/public',
          hostname: '0.0.0.0',
          livereload: true,
          open: true,
          port: 3000,
          middleware: (connect, options) => {
            const middlewares = []

            if (!Array.isArray(options.base)) {
              options.base = [options.base]
            }

            options.base.forEach(function(base) {
              middlewares.push(serveStatic(base))
            })

            // default: index.html
            middlewares.push((req, res) => {
              fs
                .createReadStream(`${options.base}/index.html`)
                .pipe(res)
            })
            return middlewares
          }
        }
      }
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
            cwd: 'src/styles',
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
          {
            expand: true,
            cwd: './node_modules/jquery/dist/',
            src: '**/*',
            dest: './dist/public/lib/jquery'
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
  grunt.registerTask('start', ['default', 'connect', 'watch'])

}
