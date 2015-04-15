module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shipit: {
      options: {
        workspace: '/tmp/lenses',
        deployTo: '/home/lenses',
        repositoryUrl: 'https://github.com/lenses/lens-composer-node.git',
        branch: 'master',
        ignores: ['.git', 'node_modules'],
        key: '~/.ssh/id_rsa'
      },

      prod: {
        servers: 'deployer@45.55.136.35',
      }
    }
  });

  grunt.loadNpmTasks('grunt-shipit');
  grunt.loadNpmTasks('shipit-deploy');

};
