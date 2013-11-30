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
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['sass', 'browserify']);
};