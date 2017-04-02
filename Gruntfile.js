module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist1: {
        src: ['src/header.js','src/model/*.js','src/view/*.js','src/controller/*.js','src/app.js'],
        dest: 'dist/<%= pkg.name %>.js'
      },
      dist2: {
        src: ['bower_components/underscore/underscore.js',
              'bower_components/backbone/backbone.js',
              'bower_components/react/react.js',
              'bower_components/react/react-dom.js',
              'bower_components/react-bootstrap/react-bootstrap.js',
              'bower_components/reqwest/reqwest.js',
                'dist/bundle.js'],
        dest: 'public/dist/<%= pkg.name %>.js'
      },
      css1: {
        src: ['src/style/fix.css',
              'bower_components/bootstrap/dist/css/bootstrap.min.css',
              'src/style/bootstrap.theme.css'],
        dest: 'public/dist/<%= pkg.name %>.css'
      }
    },
    watch: {
      browserify: {
        files: ['src/**/*.js','src/**/*.css'],
        tasks: ['default']
      }
    },

    browserify: {
      dist: {
        options: {
           transform: [['babelify', {presets: ['es2015', 'react']}]]
        },        
        src: ['dist/<%= pkg.name %>.js'],
        dest: 'dist/bundle.js',
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');  
  grunt.loadNpmTasks('grunt-contrib-concat');  
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['concat:css1','concat:dist1','browserify','concat:dist2']);

};