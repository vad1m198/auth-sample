var webpack = require('webpack');
 
var config = {
	devtool: 'source-map',
  entry: ['./app.js'],
	
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  
    module: {
    loaders: [
      { test: /\.js/, exclude: /node_modules/, loaders: ['babel'] },      
    ]
  },  
}
module.exports = config;