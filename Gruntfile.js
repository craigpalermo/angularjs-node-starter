module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-shell');

    grunt.initConfig({
        /* for live reload, select which files to watch */
        watch: {
            livereload: {
                files: [],
                options: { livereload: true },
            },
            coffee: {
                files: ['coffee/**/*.coffee'],
                tasks: ['coffee:compile']
            },
            jade: {
                files: ['jade/**/*.jade'],
                tasks: ['jade:compile']
            },
            stylus: {
                files: ['stylus/**/*.styl'],
                tasks: ['stylus:compile']
            }
        },
        /* select coffee files to compile */
        coffee: {
            compile: {
                options: {
                    join: true
                },
                files: [{
                    expand: true,
                    cwd: "coffee/",
                    src: ['**/*.coffee'],
                    dest: './build/js/',
                    ext: '.js'
                },{
                    expand: true,
                    cwd: "coffee/",
                    src: ['server.coffee'],
                    dest: './build/',
                    ext: '.js'
                }]
            }
        },
        /* select jade files to compile */
        jade: {
            compile: {
                options: {
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: "jade/",
                    src: ['index.jade'],
                    dest: './build/',
                    ext: '.html'
                },{
                    expand: true,
                    cwd: "jade/",
                    src: ['**/partials/*.jade'],
                    dest: './build/',
                    ext: '.html'
                }]
            }
        },
        /* select stylus files to compile */
        stylus: {
            compile: {
                files: [{
                    expand: true,
                    cwd: "stylus/",
                    src: ['**/*.styl'],
                    dest: './build/css/',
                    ext: '.css'
                }]
            }
        }
    });

    grunt.registerTask('build', ['jade', 'coffee', 'stylus'])
};
