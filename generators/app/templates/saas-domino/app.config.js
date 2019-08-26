module.exports = {
  // 应用类型
  appType: 'domino',
  // 页面配置
  page: {
    index: {
      entry: './src/index',
      title: '首页',
      spmb: '',
      heads: [],
      bodies: [],
    },
  },
  // runtime相关配置
  runtime: {
    // 全局head
    heads: [],
    // 全局body
    bodies: [],
    // 插件配置
    plugins: [],
  },
  webpack: {
    // 主题配置
    themes: {},
    // 开启pxtorem
    pxtorem: false,
    // 是否开启chunk分析
    analyze: false,
    // devServer配置
    devServer: {
      host: 'local.koubei.test',
      port: 8000,
      path: '',
      query: {
        id: '111111',
      },
    },
    // 自定义构建配置、config为全局的构建配置
    config: (webpackConfig) => {
      return webpackConfig;
    }
  }
};