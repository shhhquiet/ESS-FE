require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withSass(withImages());
