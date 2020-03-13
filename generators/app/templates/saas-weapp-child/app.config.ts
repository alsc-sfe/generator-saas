module.exports = {
  appType: 'weAppChild',
  microAppName: 'myWeApp',
  // 路由前缀默认使用 /${microAppName}
  // 需要自定义则设置basename
  // basename: '/',
  // 页面配置
  page: [{
    module: 'index',
    route: '/index',
  }],
  webpack: {
    // 主题配置
    themes: {},
    // 是否开启chunk分析
    analyze: false,
    // dev启动配置
    devServer: {
      host: 'local.koubei.test',
      path: 'myWeApp/index',
      query: {
      },
    },
    // 自定义构建配置、config为全局的构建配置
    config(webpackConfig) {
      return webpackConfig;
    },
  },
};
