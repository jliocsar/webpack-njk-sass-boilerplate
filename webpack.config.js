const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const devMode = process.env.NODE_ENV === 'development'
const prodMode = process.env.NODE_ENV === 'production'

// JavaScript files rules
const jsRule = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
}

// Nunjucks files rules
const nunjucksRule = {
  test: /\.njk$/,
  exclude: /node_modules/,
  use: {
    loader: 'nunjucks-render-loader',
    options: {
      path: `${__dirname}/src/views`
    }
  }
}

// Sass/SCSS/CSS files rules
const sassRule = {
  test: /\.(sa|sc|c)ss$/,
  exclude: /node_modules/,
  use: [
    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader'
  ]
}

// Webpack-dev-server config
const devServer = {
  contentBase: `${__dirname}/public`,
  open: true,
  port: 3000
}

// Webpack Plugins list
const plugins = [
  new DashboardPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/views/index.njk'
  }),
  new MiniCssExtractPlugin({
    filename: 'index.css'
  })
]

// Call CSS minification if not in dev mode
if (prodMode) {
  plugins.push(
    new OptimizeCSSAssets()
  )
}

// Webpack configs
const config = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/public`
  },
  module: {
    rules: [
      jsRule,
      sassRule,
      nunjucksRule,
    ]
  },
  devServer,
  plugins,
}

module.exports = config
