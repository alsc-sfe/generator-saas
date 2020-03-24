import { generatorNormal } from '@choicefe/we-app-generator';
import { env, publishEnv, hostAppName } from './utils/env';

async function getBaseUrl() {
  const baseUrl = await generatorNormal({
    name: hostAppName, // 发布渠道【父应用】名称
    env, // 当前环境环境值，如：tst、ttt等
    publishEnv, // 当前所处发布阶段，如：project、daily、pre、prod等
    fact: {}, // 用来当做灰度命中的匹配条件，可不传
  });

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `${baseUrl}index.css`;
  document.body.appendChild(link);

  const script = document.createElement('script');
  script.src = `${baseUrl}index.js`;
  document.body.appendChild(script);
}

getBaseUrl();
