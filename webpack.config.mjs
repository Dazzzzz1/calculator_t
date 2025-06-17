import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'development',
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
