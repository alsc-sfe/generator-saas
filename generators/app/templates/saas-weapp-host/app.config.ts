module.exports = {
  appType: 'weAppHost',
  // 页面标题
  title: '云平台',

  webpack: {
    // 主题配置
    themes: {},
    // 是否开启chunk分析
    analyze: false,
    // dev启动配置
    devServer: {
      host: 'local.koubei.test',
      path: '/',
      query: {
      },
    },
    // 自定义构建配置、config为全局的构建配置
    config(webpackConfig) {
      return webpackConfig;
    },
  },
};
