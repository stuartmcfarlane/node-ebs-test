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
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['sass']);
};