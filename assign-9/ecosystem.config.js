module.exports = {
  apps : [{
    script: 'setup.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker'],
    env: {
      "PHOTON_ID": "190035000347393035313138",
      "PHOTON_TOKEN": "644c9c8a3c4782f6ef601770d186d2f27fc0eacb",
      "AWSRDS_PW": "k8VM$d1Az"
    }
  }],
  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
