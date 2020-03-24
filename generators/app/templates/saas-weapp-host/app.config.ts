module.exports = {
  appType: 'weAppHost',
  // 父应用名称，与wap同名
  hostAppName: '<%= name %>',
  // 页面标题
  title: '云平台',

  // 使用版本引擎，主要用于灰度
  // useVersionEngine: true,

  // 使用react15
  // reactVersion: '15',

  webpack: {
    // 主题配置
    themes: {},
    // 是否开启chunk分析
    analyze: false,
    // dev启动配置
    devServer: {
      host: 'localhost',
      path: '',
      query: {
      },
    },
    // 自定义构建配置、config为全局的构建配置
    config(webpackConfig) {
      return webpackConfig;
    },
  },
};
