module.exports = {
  devServer: {
    port: process.env.VUE_APP_PORT || 8081,
    proxy: {
      '/posts': {
        target: process.env.VUE_APP_API_URL, // API 서버 주소
        changeOrigin: true,
      },
    },
  },
};