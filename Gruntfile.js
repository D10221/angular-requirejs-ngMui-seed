
'use strict';

var glob = require('glob');

module.exports = function(grunt){

grunt.initConfig({
    exec: {
        ts:{
            cmd:function(){
                var tsFIles = glob.sync('app/**/*.ts').reduce(function(previousValue, currentValue, index, array){
                    return previousValue+" "+currentValue;
                });
                return "tsc -sourceMap " + tsFIles;
            }
        },
        remove_logs: {
            command: 'rm -f *.log',
            stdout: false,
            stderr: false
        },
        list_files: {
            cmd: 'ls -l **'
        },
        list_all_files: 'ls -la',
        echo_grunt_version: {
            cmd: function() { return 'echo ' + this.version; }
        },
        echo_name: {
            cmd: function(firstName, lastName) {
                var formattedName = [
                    lastName.toUpperCase(),
                    firstName.toUpperCase()
                ].join(', ');

                return 'echo ' + formattedName;
            }
        }
    }
});

grunt.loadNpmTasks('grunt-exec');

}