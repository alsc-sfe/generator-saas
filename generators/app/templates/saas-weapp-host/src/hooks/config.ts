import { Page404, Page403, Page500, Loading } from './components';
import { env } from '../utils/env';

export default [
  {
    hookName: 'basicLibs',
    config: {
      url: [
        '//at.alicdn.com/t/font_825912_8drbhr0dp7i.css',
        'https://gw.alipayobjects.com/os/lib/antd/3.25.2/dist/antd.css',

        // 'https://gw.alipayobjects.com/as/g/component/babel-polyfill/6.20.0/polyfill.min.js',

        // 'https://gw.alipayobjects.com/os/lib/systemjs/6.1.4/dist/system.min.js',
        'https://gw.alipayobjects.com/os/lib/systemjs/6.1.4/dist/extras/named-register.min.js',

        // env === 'prod' ?
        // 'https://gw.alipayobjects.com/os/lib/react/16.8.6/umd/react.production.min.js' :
        // 'https://gw.alipayobjects.com/os/lib/react/16.8.6/umd/react.development.js',

        // env === 'prod' ?
        // 'https://gw.alipayobjects.com/os/lib/react-dom/16.8.6/umd/react-dom.production.min.js' :
        // 'https://gw.alipayobjects.com/os/lib/react-dom/16.8.6/umd/react-dom.development.js',

        'https://gw.alipayobjects.com/os/lib/moment/2.24.0/min/moment.min.js',
        'https://gw.alipayobjects.com/os/lib/moment/2.24.0/locale/zh-cn.js',

        'https://gw.alipayobjects.com/os/lib/antd/3.25.2/dist/antd-with-locales.js',
        'https://gw.alipayobjects.com/os/lib/ant-design/icons/2.1.1/lib/umd.js',

        'https://gw.alipayobjects.com/os/mentor/saas-fetch/2.0.9/umd/saas-fetch-min.js',
        'https://gw.alipayobjects.com/os/mentor/saas-fetch-choice/1.0.2/umd/saas-fetch-choice-min.js',

        'https://g.alicdn.com/code/npm/@alife/system-react/1.0.1/library/umd/react-min.js',
        'https://g.alicdn.com/code/npm/@alife/system-react-dom/1.0.0/library/umd/react-dom-min.js',
        'https://g.alicdn.com/code/npm/@alife/system-antd/1.0.1/library/umd/antd-min.js',
        'https://g.alicdn.com/code/npm/@alife/system-ant-design-icons/1.0.1/library/umd/ant-design-icons-min.js',
        'https://g.alicdn.com/code/npm/@alife/system-saas-fetch/1.0.0/library/umd/saas-fetch-min.js',
      ],
    },
  },
  {
    hookName: 'skeleton',
    config: {
      template: `
        <div class="microfe-layout">
          <div class="microfe-navbar __common_navbar"></div>
          <div class="microfe-body">
            <div class="microfe-menu __common_menu"></div>
            <div class="microfe-wrapper">
              <div class="microfe-root-body">
                <div class="microfe-root-content __content"></div>
              </div>
            </div>
          </div>
        </div>
      `,
      container: document.body,
      contentSelector: '.__content',
    },
  },
  {
    hookName: 'pageContainer',
    config: {
      specialSelectors: {
        'boh-layout__navbar': '.__common_navbar',
        'boh-layout__menu': '.__common_menu',
      },
    },
    scopes: [
      'boh-layout/navbar',
      'boh-layout/menu',
    ],
  },
  {
    hookName: 'loading',
    config: {
      element: Loading,
    },
  },
  {
    hookName: '404',
    config: {
      page: {
        url: [Promise.resolve(Page404)],
      },
      excludePages: ['boh-layout/navbar', 'boh-layout/menu'],
    },
  },
  {
    hookName: '403',
    config: {
      page: {
        url: [Promise.resolve(Page403)],
      },
      excludePages: ['boh-layout/navbar', 'boh-layout/menu'],
      check403: async (pageAuth: any) => {
        const n = Math.random();
        const hasOrg = n < 0.2;
        const hasSign = n > 0.3 && n < 0.4;
        const orgPass = n > 0.8;
        const is403 = hasOrg || hasSign || orgPass;

        if (!pageAuth) {
          return;
        }

        if (!is403) {
          return false;
        }

        return { hasOrg, hasSign, orgPass };
      },
    },
  },
  {
    hookName: '500',
    config: {
      page: {
        url: [Promise.resolve(Page500)],
      },
    },
  },
]
