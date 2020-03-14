/* eslint-disable import/prefer-default-export */
import { AppListParser } from '@saasfe/we-app/lib/weapp/product';
import { AppConfig } from '@saasfe/we-app/lib/weapp/app';
import generator from '@choicefe/we-app-generator';
import { cdnHost, publishEnv } from '../utils/env';

const parseWeAppNames: AppListParser = async function parseAppList(weAppNames: string[]) {
  return weAppNames.map((appConfigPath) => {
    if (typeof appConfigPath !== 'string') {
      return appConfigPath;
    }

    const weAppList: AppConfig = {
      url: `${cdnHost}/web/dist/${appConfigPath}/app-config.js`,
    };

    if (/app-config/g.test(appConfigPath)) {
      weAppList.url = appConfigPath;
    }

    return weAppList;
  });
};

const generateWeAppList: AppListParser = async function (name: string, opts = {}) {
  const { context } = opts;
  const urls: AppConfig[] = await generator({
    name: name || 'boh', // 发布渠道【父应用】名称
    env: publishEnv, // 当前所在环境，如：project、daily、pre、prod等
    fact: context, // 用来当做灰度命中的匹配条件，可不传
  });
  return urls;
};

const parseAppList: AppListParser = async function parseAppList(appList: any, opts) {
  let weAppList: AppConfig[] = [];
  if (!appList || typeof appList === 'string') {
    weAppList = await generateWeAppList(appList, opts);
  } else {
    weAppList = await parseWeAppNames(appList, opts);
  }
  return weAppList;
};

export {
  parseAppList,
};
