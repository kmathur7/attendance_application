module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jshint: {
      options: {
        unused:true,      /* warns when you define and never use your variables. */
        curly:true,       /* requires you to always put curly braces around blocks in loops and conditionals. */
        camelcase:true,   /* force all identifiers (function, variable and property) to either be written in camel case or in uppercase with underscores */
        funcscope:false,  /* option suppresses warnings about declaring variables inside of control structures while accessing them later from the outside. */
        latedef:true,     /* option prohibits the use of a variable before it was defined. */
        nonbsp:true,      /* option warns about "non-breaking whitespace" characters. */
        debug:false,      /* suppresses warnings about the debugger statements in your code. */
        eqnull:false      /* option suppresses warnings about == null comparisons. */
        
        
        
        //reporterOutput: 'jshint.html'
          //reporter: require('checkstyle')
      },
      all: ['Gruntfile.js', 'scripts/**/*.js']
  },
  watch: {
    scripts: {
      files: ['scripts/**/*.js'],
      tasks: ['jshint'],
      options: {
      spawn: false
      }
    },
    html: {
      files: ['views/**/*.html','index.html'],
      tasks: ['validation'],
      options: {
      spawn: false
      }
    } 

  },
  connect: {
    server: {
      options: {
        port: 9001,
        base: '../attendance_application',
        keepalive: true,
        open: {
                target: 'http://localhost:9001', // target url to open
                appName: 'chrome' // name of the app that opens, ie: open, start, xdg-open
                
              }
      }
    }
  },
  
  wiredep: {
    task: {
      // Point to the files that should be updated when
      // you run `grunt wiredep`
      src: ['index.html']
      }
  },
  validation: {
    options: {
        
        reportpath: false,
        stoponerror: false,
        doctype: "HTML5",
        relaxerror: ['Element head is missing a required instance of child element title.']
    },
    files: {
        src: [
              'index.html',
              'views/*.html'
             ]
    }
  },
  concurrent: {
        validate: ['jshint','validation']
  },
  csslint: {
    strict: {
      options: {
        import: 2
      },
      src: ['css/*.css']
    }
  },
  karma: {
  unit: {
    configFile: 'karma.conf.js'
  }
}
  });

  // Load the plugin that provides the "uglify" task.
 require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['validate']);
  grunt.registerTask('validate', ['concurrent:validate']);

  
  

};