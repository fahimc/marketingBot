module.exports = function(grunt) {

grunt.initConfig({
  node_auto_deploy: {
    options: {
      url: 'm8e.co.uk/marketingbot',
      alias: ['www.m8e.co.uk/marketingbot'],
      conf: true,
      command: 'node server.js',
      port: '9000',
      path: '/var/www/sites',
      nginx: '/etc/nginx/sites-enabled',
      git: 'git@github.com:fahimc/marketingBot.git',
      branch: 'master',
      ssh: 'console-42v78Y@198.23.162.194',
      before: [
        'echo hello'
      ]
    }
  },
});

};