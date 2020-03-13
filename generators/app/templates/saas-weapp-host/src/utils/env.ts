const Envs: { [prop: string]: string[] } = {
  local: ['local'],
  dev: ['dev', 'project', 'daily'],
  tst: ['tst', 'ttt', 'tst01', 'tsm', 'fat'],
  pre: ['pre'],
  prod: ['pro', 'prod', 'production'],
};

const EnvMap: { [prop: string]: string } = {};
Object.keys(Envs).forEach((env) => {
  Envs[env].forEach((k) => {
    EnvMap[k] = env;
  });
});

export const env = EnvMap[window.env];

const DevEnvs = ['local', 'dev', 'tst', 'pre'];

const CDNHosts = {
  prod: 'cdn.choicesaas.cn',
  dev: 'cdn-dev.choicesaas.cn',
};

export const cdnHost = DevEnvs.indexOf(env) > -1 ? CDNHosts.dev : CDNHosts.prod;
