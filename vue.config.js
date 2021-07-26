module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://api.shop.eduwork.cn/',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }