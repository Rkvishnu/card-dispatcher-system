// config/config.js

require('dotenv').config();

module.exports = {
  development: {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/card-dispatcher-dev',
    JWT_SECRET: process.env.JWT_SECRET || 'secret'
  },
  test: {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/card-dispatcher-test',
    JWT_SECRET: process.env.JWT_SECRET || 'secret'
  },
  production: {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/card-dispatcher',
    JWT_SECRET: process.env.JWT_SECRET
  }
};
