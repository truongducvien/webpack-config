import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = path.resolve();

const config = (env) => ({
  mode: env.mode,
  entry: {
    index: {
      import: './src/index.ts',
      // dependOn: 'shared', // Use optimization.splitChunks.chunks = 'all' instead.
    },
    print: {
      import: './src/printMe.ts',
      // dependOn: 'shared', // Use optimization.splitChunks.chunks = 'all' instead.
    },
    store: {
      import: './src/store/obj.ts',
      // dependOn: 'shared', // Use optimization.splitChunks.chunks = 'all' instead.
    },
    // shared: ['lodash'], // Use optimization.splitChunks.chunks = 'all' instead.
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack-test-1',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: env.port || 4000,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      // Javascript
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        include: path.resolve(__dirname, 'src'),
      },

      // Typescript
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
      },

      // CSS:
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, 'src'),
      },

      // Image:
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        include: path.resolve(__dirname, 'src'),
      },

      // Doc:
      {
        test: /\.csv$/,
        use: ['csv-loader'],
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
  resolve: {
    // By default, webpack does not look for .ts extension.
    // The item '...' means to keep all the default existed configuration for extensions:
    extensions: ['.ts', '...'],
    alias: {
      // These must be synchronize with paths in tsconfig.json
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@style': path.resolve(__dirname, 'src/style/'),
      '@': path.resolve(__dirname, 'src/'),
    },
  },
});

export default config;
