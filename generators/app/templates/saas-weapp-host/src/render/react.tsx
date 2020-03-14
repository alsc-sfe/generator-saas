import React from 'react';
import ReactDOM from 'react-dom';
import { Render } from '@saasfe/we-app/lib/weapp/base';
import { ChoiceLayout } from 'choice-cbm';

const reactRender: Render = {
  mount(Component: any, container?: Element, customProps?: any) {
    const { pageScope } = customProps;
    const layout = pageScope.getConfig('layout');

    ReactDOM.render(
      <ChoiceLayout {...layout} emptyLayout={!layout}>
        <Component {...customProps} />
      </ChoiceLayout>,
      container as Element
    );
  },
  unmount(container?: Element) {
    ReactDOM.unmountComponentAtNode(container as Element);
  },
};

export default reactRender;
