module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'tripPlanner.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  watch: true
}
