module.exports = {
  // 页面配置
  page: {
    index: {
      entry: './src/index',
      title: 'test page',
      spmb: '',
      heads: [],
      bodys: [],
    },
  },
  // 插件配置
  plugins: [{
    kbtracker: {
    },
  }],
  // 主题配置
  themes: {},
  // 是否设置viewport
  viewport: true,
  // 全局head
  heads: [],
  // 全局body
  bodys: [],
  // 自定义构建配置、config为全局的构建配置
  'builder': (config) => {}
};