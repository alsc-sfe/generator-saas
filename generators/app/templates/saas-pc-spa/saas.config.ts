module.exports = {
  // saas应用类型
  sat: 'pc-spa',
  microConfig: {
    status: true,
    appRoute: 'org',
  },
  // 页面配置
  page: {
    index: {
      route: '/index',
      header: true,
      menu: 'boh',
    },
    sample: {
      route: '/sample',
      header: true,
      menu: 'crm',
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
      config: {}, // 插件相关配置
    }],
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
