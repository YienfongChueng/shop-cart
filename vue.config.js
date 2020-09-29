const path = require('path')
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': 'mock/'
        },
        ws: false,
        // 将主机头的原点改为目标的url
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@api': path.resolve(__dirname, './src/api'),
        '@css': path.resolve(__dirname, './src/assets/css'),
        '@img': path.resolve(__dirname, './src/assets/img')
      }
    }
  }
}
