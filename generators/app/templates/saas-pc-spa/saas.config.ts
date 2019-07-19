module.exports = {
  // saas应用类型
  appType: 'microapp',
  // 微应用相关配置
  miniAppName: 'org',
  // 页面配置
  page: {
    index: {
      route: '/index',
    },
    sample: {
      route: '/sample',
    },
  },
  // runtime相关配置
  runtime: {
    // 全局head
    heads: [],
    // 全局body
    bodys: [],
    // 插件配置
    plugins: [],
  },
  webpack: {
    // 主题配置
    themes: {},
    // 是否开启chunk分析
    analyze: false,
    // 自定义构建配置、config为全局的构建配置
    config(webpackConfig) {
      return webpackConfig;
    },
  },
};
