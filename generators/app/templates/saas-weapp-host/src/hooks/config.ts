import { Page404, Page403, Page500, Loading } from './components';

export default [
  {
    hookName: 'basicLibs',
    config: {
      url: [],
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
];
