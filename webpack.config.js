var webpack = require('webpack'); 
 
var config = {
	devtool: 'source-map',
  entry: ['./src/main.js'],
	
  output: {
    path: 'build/',
    filename: 'bundle.js'
  },
  
    module: {
    loaders: [
      { test: /\.js/, exclude: /node_modules/, loader: 'ng-annotate!babel' },
      { test: /\.html$/, loader: 'raw' }
    ]
  },  
}
module.exports = config;