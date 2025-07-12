module.exports = {
  apps: [
    {
      name: 'fnn-backend',
      script: 'server.js',
      cwd: './backend',
      env: {
        NODE_ENV: 'development',
        PORT: 5001,
        MONGODB_URI: 'mongodb://localhost:27017/fnn-news'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5001,
        MONGODB_URI: 'mongodb://localhost:27017/fnn-news'
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: './logs/backend-error.log',
      out_file: './logs/backend-out.log',
      log_file: './logs/backend-combined.log',
      time: true
    },
    {
      name: 'fnn-frontend',
      script: 'serve',
      args: '-s build -l 3000 -n --single',
      cwd: './frontend',
      env: {
        NODE_ENV: 'production',
        REACT_APP_API_URL: 'http://localhost:5001/api'
      },
      env_production: {
        NODE_ENV: 'production',
        REACT_APP_API_URL: 'http://localhost:5001/api'
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: './logs/frontend-error.log',
      out_file: './logs/frontend-out.log',
      log_file: './logs/frontend-combined.log',
      time: true
    }
  ]
};
