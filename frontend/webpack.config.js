const webpack = require('webpack')
const path = require('path')

module.exports = function(){
  return {
    entry: './src/app.jsx',
    output: {
      path: __dirname + '/dist',
      filename: './bundle.js'
    },
    devServer: {
      port:8083,
      contentBase:'./dist',
      historyApiFallback: true
    },
    mode: 'development',
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
          modules: __dirname + '/node_modules',
          fontAwesome: 'modules/font-awesome/css/font-awesome.min.css'
      }
    },
    module:{
      rules:[
        {
          test: /\.(js|jsx)?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['env', 'react']
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }, {
          test: /\.scss$/,
          use: [{
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }]
        },
        {
          test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
          loader: 'file-loader'
        }
      ]
    }
  }
}
