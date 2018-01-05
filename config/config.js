var config = {};
// this is set as heroku env variable: DB_URL
// config.db = 'mongodb://heroku1:heroku1@ds059672.mlab.com:59672/simple-url-shortener-app';
config.db = 'mongodb://localhost/simple-url-shortener-app';
module.exports = config;