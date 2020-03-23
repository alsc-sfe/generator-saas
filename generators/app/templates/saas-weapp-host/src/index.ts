import {
  setResourceLoader, setPageContainer, setRender,
  registerApps, start,
  setHomepage, setContext, setRouterType, RouterType,
  usingHooks, configHooks
} from '@saasfe/we-app';
import { ReactRender } from './render';
import hookConfigs from './hooks/config';
import parseAppList from './app-list/parser';
import './fetch';
import './style.less';

// 设置路由类型
// 默认为 RouterType.browser
// setRouterType(RouterType.hash);

// 设置资源加载器
// 已内置，如无法满足需求可自行定制
// 加载器的具体编写方式，参见 @saasfe/we-app/src/resource-loader
// setResourceLoader(resourceLoader);

// 设置渲染容器
// setPageContainer(document.querySelector('#__microfe-root-content'));
// setPageContainer(document.querySelector('#boh-layout__navbar'), ['boh-layout/navbar']);
// setPageContainer(document.querySelector('#boh-layout__menu'), ['boh-layout/menu']);

// 设置渲染器
setRender(ReactRender);

// 设置首页
// setHomepage('boh-dish/dish-set');

// 配置扩展
configHooks(hookConfigs);

// 注册子应用列表
// @ts-ignore
registerApps(window[Symbol.for('WeAppList')], parseAppList);

// 启动微应用框架
start();
