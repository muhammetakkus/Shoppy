var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// htmlWebpackPlugin & commonChunkPlugin

module.exports = {
    //context: '', //soruce kodların ana dizinini belirt
    entry: {
      // main: ['./src/js/app.js', './src/sass/main.sass'],
      // home: ['./src/js/home.js', './src/sass/test.sass'],

      'js/bundle.js': './src/js/app.js',
      //'js/home.js': './src/js/home.js',

      //src/sass klasöründe yeni .sass oluşturduğumuzda aynı isimde dist/css 'e compile etsin? nasıl yaparız?
      'css/main.css': './src/sass/main.sass',
      'css/home.css': './src/sass/home.sass',
      //'css/test.css': './src/sass/admin/admin_main.sass',
    },
    output: {
      filename: '[name]',
      path: path.resolve(__dirname, 'dist'),
      publicPath: path.resolve(__dirname, 'dist'), //webpack out served this dir?
    },
    devtool: 'source-map', //??
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [path.resolve(__dirname, '/node_modules/')], //bu ne?
          use: [{
            loader: 'babel-loader',
            options: {presets: ['es2015']}
            //options: {presets: [['es2015', { modules: false }]]}
            //options: { presets: ['env'] }
          }]
        },
        {
          test: /\.sass$/,
          use: ExtractTextPlugin.extract({
            // fallback: 'style-loader',
            use: ['css-loader','sass-loader'],
            //publicPath: path.resolve(__dirname, 'dist/css') //bu ne işe yarıyor
          })
        }
      ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
    watch: true,
    plugins: [
      //new ExtractTextPlugin('css/main.css') //bunun ile alttaki özelleştirilmiş seçeneklerin ne farkı var?
      new ExtractTextPlugin({
          filename: '[name]', //bunu [name] şeklinde kullanmanın ne avantajı var
          disable: false,
          allChunks: true
      }),
      new BrowserSyncPlugin({
          host: 'localhost',
          port: 3000,
          files: ['./dist/css/*.css','./dist/js/*.js','./*.html'],
          proxy: "http://localhost/Shoppy/"
        },
        {
        reload: false
      })
    ]
  // ,
  // devtool: 'inline-source-map',
  // devServer: {
  //   hot: true
  //   noInfo: false, //bu 2 satır varsa hot 'ı kaldır
  //   inline: true
  // }
};
