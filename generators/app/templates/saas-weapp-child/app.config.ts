module.exports = {
  appType: 'weAppChild',
  microAppName: 'myWeApp',

  // 父应用名称或静态资源地址，本地父子应用联调使用
  // 父应用名称与wap上保持一致
  // hostApp: 'cdn-child-test',
  // 父应用静态资源地址
  // hostApp: ['//localhost:8000/index.js', '//localhost:8000/index.css'],

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
      host: 'localhost',
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
