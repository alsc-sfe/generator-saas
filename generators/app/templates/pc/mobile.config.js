const pkg = require('./package.json');

const version = 'auto';
const { name, description, appId } = pkg;

const launchParams = {
  url: '/www/index.html',
};

const host = {
  enable: true,
  dev: `http://${appId}.h5app.alipay.net`,
  test: `http://${appId}.h5app.test.alipay.net`,
  online: `https://${appId}.h5app.alipay.com`,
};

const build = {
  include: [
    'www/**/*',
  ],
  ignore: [
    'www/**/*.md',
    'www/*-+(+([0-9]).){js,css}',
  ],
};

const channel = {
  portal: {
    deploy: 'nebula',
    container: 'AP',
    appid: appId,
    name,
    version,
    description,
    launchParams,
    host,
    build,
    support: {
      ios: {
        minSDK: '0',
        maxSDK: '100',
        minOS: '9.9.0',
        maxOS: '100',
      },
      android: {
        minSDK: '0',
        maxSDK: '100',
        minOS: '9.9.0',
        maxOS: '100',
      },
    },
  },
  koubei: {
    deploy: 'nebula',
    container: 'KC',
    appid: appId,
    name,
    version,
    description,
    launchParams,
    host,
    build,
    support: {
      ios: {
        minSDK: '0',
        maxSDK: '100',
        minOS: '6.1.0',
        maxOS: '100',
      },
      android: {
        minSDK: '0',
        maxSDK: '100',
        minOS: '6.1.0',
        maxOS: '100',
      },
    },
  },
  taobao: {
    deploy: 'awp',
    container: 'taobao',
    appid: 'appid',
    name,
    version,
    description,
    launchParams: {},
    host: {},
    build,
    support: {},
  },
  merchant: {
    deploy: 'nebula',
    container: 'KM',
    appid: appId,
    name,
    version,
    description,
    launchParams,
    host,
    build,
    support: {
      ios: {
        minSDK: '0',
        maxSDK: '100',
        minOS: '0',
        maxOS: '100',
      },
      android: {
        minSDK: '0',
        maxSDK: '100',
        minOS: '0',
        maxOS: '100',
      },
    },
  },
  kbcashier: {
    deploy: 'nebula',
    container: 'KF',
    appid: appId,
    name,
    version,
    description,
    launchParams,
    host,
    build,
    support: {
      ios: {
        minSDK: '0',
        maxSDK: '100',
        minOS: '0.0',
        maxOS: '100',
      },
      android: {
        minSDK: '0',
        maxSDK: '100',
        minOS: '0.0',
        maxOS: '100',
      },
    },
  },
};

exports.packages = {
  portal: channel.merchant,
};
