module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: ['*.scss'],
                    dest: 'public',
                    ext: '.css'
                }]
            }
        },
        browserify: {
            dist: {
                files: {
                    'public/test.js': ['src/js/main.js'],
                }
            }
        },
        aws: grunt.file.readJSON(".awscredentials/credentials.json"),
        s3: {
            options: {
                accessKeyId: "<%= aws.accessKeyId %>",
                secretAccessKey: "<%= aws.secretAccessKey %>",
                bucket: "elasticbeanstalk-eu-west-1-475982404834",
                httpOptions: {
                  proxy: process.env.http_proxy
               }
            },
            build: {
                cwd: "public/",
                src: "**",
                dest: "statics/"
            }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-aws');

    grunt.registerTask('default', ['sass', 'browserify', 's3']);
};