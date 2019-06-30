import React, { PureComponent } from 'react';
import ReactDOM from "react-dom";
import KMLayout from '@alipay/mo-alsh-merchant-framework';
import { Button } from 'antd';
import LoadSpa from './load-spa';

class Portal extends PureComponent {
  componentDidMount() {
    LoadSpa();
  }

  render() {
    return (
      <KMLayout menuTag="km">
        <div id="react-content">
          <a href="#/index"><Button>#index</Button></a>
        </div>
      </KMLayout>
    );
  }
}

ReactDOM.render(<Portal />, document.querySelector('main'));
