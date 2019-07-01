module.exports = {
  // saas应用类型
  sat: 'pc-spa',
  // 页面配置
  page: {
    index: {
      entry: './src/index',
      js: 'index.js',
      route: '/index',
      header: false,
      menu: false,
    },
    sample: {
      entry: './src/sample',
      js: 'sample.js',
      route: '/sample',
      header: false,
      menu: false,
    },
  },
  // runtime相关配置
  runtime: {
    // 全局head
    heads: [],
    // 全局body
    bodys: [],
    // 插件配置
    plugins: [{
      name: '@ali/saas-plugin-fireworm',
      status: true, // 是否开启
      config: {} // 插件相关配置
    }],
  },
  webpack: {
    // 主题配置
    themes: {},
    // 是否开启chunk分析
    analyze: false,
    // 自定义构建配置、config为全局的构建配置
    config: (webpackConfig) => {
      return webpackConfig;
    }
  }
};