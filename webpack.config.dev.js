const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');
dotenv.config();

module.exports = {
  name: 'front-dev',
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    static: { directory: path.resolve(__dirname) },
    devMiddleware: { publicPath: '/' },
    hot: true,
    port: 3000,
    proxy: {
      '/api/': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new RefreshWebpackPlugin(),
    new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: true }),
    new HtmlWebpackPlugin({ template: './index.html' }),
    new MiniCssExtractPlugin({ filename: './common.css' }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@layouts': path.resolve(__dirname, './src/layouts/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@apis': path.resolve(__dirname, './src/apis/'),
      '@reducers': path.resolve(__dirname, './src/reducers/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
    },
  },
  /* 입력 */
  entry: {
    app: './src/client',
  },
  /* 출력 */
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  /* 모듈 */
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['last 2 chrome versions'], // 지원되는 브라우저 설정, browserlist
                  },
                  debug: true, // 디버깅 옵션
                },
              ],
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],

            plugins: [
              ['react-refresh/babel'], // 핫 리로딩
              ['@emotion', { sourceMap: true }],
              ['@babel/plugin-transform-runtime', { regenerator: true }],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/font',
      },
      {
        test: [/\.png?$/, /\.jpg?$/, /\.svg$/],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]',
          },
        },
      },
    ],
  },
};
