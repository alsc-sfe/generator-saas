import Event from './common/base/event';

App({

  globalData: {

  },

  onLaunch(options) {
    console.log("App Launch", options);
    // 初始化事件监听
    Event.init(options);
  },

  onShow(options) {
    console.log("App Show", options);
  },

})
