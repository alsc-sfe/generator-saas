import {
  setResourceLoader, setPageContainer, setRender,
  registerApps, start,
  setHomepage, setContext, setRouterType, RouterType,
  usingHooks, configHooks
} from '@saasfe/we-app';
import resourceLoader from './resource-loader';
import { ReactRender } from './render';
import hookConfigs from './hooks/config';
import WeAppList from './app-list/config';
import { parseAppList } from './app-list/parser';
import { publishEnv, hostAppName } from './utils/env';

// 设置路由类型
// 默认为 RouterType.browser
// setRouterType(RouterType.hash);

// 设置资源加载器
// 已内置，如无法满足需求可自行定制
// 加载器的具体编写方式，参见 @saasfe/we-app/src/resource-loader
// setResourceLoader(resourceLoader);

// 设置渲染容器
// setPageContainer(document.querySelector('#__microfe-root-content'));
// setPageContainer(document.querySelector('#bcommon__navbar'), ['bcommon/navbar']);
// setPageContainer(document.querySelector('#bcommon__menu'), ['bcommon/menu']);

// 设置渲染器
setRender(ReactRender);

// 设置首页
// setHomepage('bcommon/account-settings');

// 配置扩展
configHooks(hookConfigs);

// 注册子应用列表
// 本地开发使用配置
const localAppListKey: symbol = Symbol.for('WeAppList');
// @ts-ignore
const localAppList = window[localAppListKey] as any || WeAppList;
// 线上运行使用远程配置文件
const appList = publishEnv === 'local' ? localAppList : hostAppName;
registerApps(appList, parseAppList);

// 启动微应用框架
start();
