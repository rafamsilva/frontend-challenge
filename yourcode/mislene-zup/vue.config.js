const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}']
      })
    ]
  },
  devServer: {
    disableHostCheck: true
  }
}
