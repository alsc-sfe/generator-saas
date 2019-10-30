/**
 * 配置文件
 */
const config = {
  "version": "1.0.1",
  "appId": "",
  "appName": "口碑商家小程序模板",
  "pages": [
    "pages/read.md/read.md",
    "pages/demo/read.md"
  ],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "口碑微信小程序模板",
    "navigationBarTextStyle": "black"
  },
  "tabBar": {
    "list": [
      {
        "pagePath": "pages/read.md/read.md",
        "text": "首页",
        "iconPath": "./assets/tab/home.png",
        "selectedIconPath": "./assets/tab/home_select.png"
      },
      {
        "pagePath": "pages/demo/read.md",
        "text": "演示",
        "iconPath": "./assets/tab/demo.png",
        "selectedIconPath": "./assets/tab/demo_select.png"
      }
    ]
  },
};

export default config;
