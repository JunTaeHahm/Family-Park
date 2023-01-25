import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import dotenv from 'dotenv';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
import pkg from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

dotenv.config();

const isDevelopment = process.env.NODE_ENV !== 'production';
const __dirname = path.resolve(); // ES모듈에서 __dirname 사용법
const { DefinePlugin } = pkg;

const config = {
  name: 'lis',
  mode: isDevelopment ? 'development' : 'production',
  devtool: !isDevelopment ? 'hidden-source-map' : 'inline-source-map',
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

  devServer: {
    historyApiFallback: true,
    open: true,
    static: { directory: path.resolve(__dirname) },
    devMiddleware: { publicPath: '/' },
    hot: true,
    port: 3000,
    /* 로컬에서 server 돌릴 때 사용 */
    // proxy: {
    //   '/api/': {
    //     target: 'http://localhost:8000',
    //     changeOrigin: true,
    //   },
    // },
  },

  entry: {
    app: './src/client',
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['> 1% in KR'], // 지원되는 브라우저 설정, browserlist
                  },
                  // useBuiltIns: 'usage',
                  // corejs: 3,
                  // shippedProposals: true,
                  debug: true, // 디버깅 옵션
                },
              ],
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
            plugins: [
              ['@emotion', { sourceMap: true }],
              ...(isDevelopment ? [['react-refresh/babel', { skipEnvCheck: true }]] : []),
              [
                '@babel/plugin-transform-runtime',
                {
                  corejs: 3,
                  proposals: true,
                },
              ],
            ],
          },
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: [/\.css$/, /\.s[ac]ss$/i],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/images/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: [/\.png?$/, /\.gif?$/, /\.ico?$/, /\.jpeg?$/, /\.jpg?$/, /\.svg$/],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
          },
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/fonts',
          to: 'src/assets/fonts',
        },
        {
          from: 'src/assets/images',
          to: 'src/assets/images',
        },
      ],
    }),
    new DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' }),
    new MiniCssExtractPlugin({ filename: './common.css' }),
    new HtmlWebpackPlugin({ showErrors: true, template: './index.html' }),
  ],
};

/* Development */
if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: false }));
  config.plugins.push(
    new ReactRefreshWebpackPlugin({
      overlay: {
        useURLPolyfill: true,
      },
    }),
  );
}

/* Production */
if (!isDevelopment && config.plugins) {
  config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
  config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: true }));
}

export default config;
