const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://nld.com.vn',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/'
            }
        })
    );
};