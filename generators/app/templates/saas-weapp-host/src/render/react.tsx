import React from 'react';
import ReactDOM from 'react-dom';
import { Render } from '@saasfe/we-app/lib/weapp/base';
import { Router, Route } from '@saasfe/we-app-react-router';
import ChoiceLayout from '@choicefe/pc-we-app-layout';

const reactRender: Render = {
  mount(Component: any, container: Element, customProps = {}) {
    const { pageScope = {}, basename } = customProps;
    const { appName } = pageScope;
    const { route, routeIgnore, layout } = pageScope.getConfig();
    const routerType = pageScope.getRouterType();

    ReactDOM.render(
      (
        <Router
          microAppName={appName as string}
          routerType={routerType}
          basename={basename as string}
        >
          <Route
            route={route}
            routeIgnore={routeIgnore}
            microAppName={appName}
          >
            <ChoiceLayout {...layout} emptyLayout={!layout}>
              <Component {...customProps} />
            </ChoiceLayout>
          </Route>
        </Router>
      ),
      container as Element
    );
  },
  unmount(container?: Element) {
    ReactDOM.unmountComponentAtNode(container as Element);
  },
};

export default reactRender;
