module.exports = {
  apps : [
    {
      name      : 'MAIN_FRONTEND',
      script    : 'npm',
      args      : 'run dev',
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ]
};
