import { WeAppListParser } from "@saasfe/we-app/lib/weapp/product";
import { WeAppConfig } from "@saasfe/we-app/lib/weapp/weapp";

export const parseAppList: WeAppListParser = async function parseAppList(microAppsInfo: any, opts = { context: {} }) {
  const microAppNames = Object.keys(microAppsInfo);
  return microAppNames.map((appName) => {
    const appVersion = microAppsInfo[appName];
    const microAppInfo: WeAppConfig = {
      url: `https://g.alicdn.com/${appName}/${appVersion}/app-config.js`,
    };

    if (/app-config/g.test(appVersion)) {
      microAppInfo.url = appVersion;
    }

    return microAppInfo;
  });
}
