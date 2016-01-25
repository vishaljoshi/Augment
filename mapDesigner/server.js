var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var host = 'localhost'
var port = '7777'

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(port, host, function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at ' + host + ':' + port);
});
