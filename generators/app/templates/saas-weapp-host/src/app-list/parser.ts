import { WeAppListParser } from "@saasfe/we-app/lib/weapp/product";
import { WeAppConfig } from "@saasfe/we-app/lib/weapp/weapp";
import { cdnHost } from "../utils/env";

export const parseAppList: WeAppListParser = async function parseAppList(microAppNames: string[], opts = { context: {} }) {
  return microAppNames.map((appConfigPath) => {
    const microAppInfo: WeAppConfig = {
      url: `//${cdnHost}/${appConfigPath}/app-config.js`,
    };

    if (/app-config/g.test(appConfigPath)) {
      microAppInfo.url = appConfigPath;
    }

    return microAppInfo;
  });
}
