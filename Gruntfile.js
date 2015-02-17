
module.exports = function(grunt) {

  // load all grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // set source and dist folders
    config: {
      app: 'app',
      dist: 'dist'
    },

    // concatenates the *.js files in the scripts root
    // and outputs a single js in the dist folder
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['<%= config.app %>/scripts/*.js'],
        dest: '<%= config.dist %>/scripts/app.js'
      }
    },

    // wiredep will inject installed bower components to the html files
    // use <!-- bower:js --> <!-- endbower --> comments in html
    wiredep: {
      task: {
        src: [
          '<%= config.app %>/*.html'
        ]}
    }

    // copies the bower dependencies to a folder
    //    bower: {
    //      options: {
    //        targetDir: '<%= config.dist %>/vendor',
    //      },
    //      install: {
    //
    //      }
    //    }

  });

  grunt.registerTask('build-me', 'builds the dist', ['concat']);
  grunt.registerTask('default', ['wiredep']);

};