import React from 'react';
import ReactDOM from 'react-dom';
import { Render } from '@saasfe/we-app/lib/weapp/base';

const reactRender: Render = {
  mount(Component: any, container: Element|null, customProps = {}) {
    ReactDOM.render(
      <Component {...customProps} />,
      container as Element,
    );
  },
  unmount(container: Element|null) {
    ReactDOM.unmountComponentAtNode(container as Element);
  },
};

export default reactRender;
