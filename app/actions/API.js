var Client = require('client');

var base = 'https://hacker-news.firebaseio.com/v0/';
var API = new Client();

API.setBase(base);

module.exports = API;