module.exports = {
  apps: [{
    name: 'kiangreenup',
    script: '.output/server/index.mjs',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
  }],
};
