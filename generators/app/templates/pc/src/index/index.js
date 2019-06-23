import React, { PureComponent } from 'react';
import KOS from 'kos-core';
import KMLayout from '@alipay/mo-alsh-merchant-framework';
import { page } from '@alipay/kos-wrapper-pc';
import model from './model';

import './style';

@page({ model })
class Index extends PureComponent {
  render() {
    return (
      <KMLayout menuTag="km">
        <div style={{ padding: '20px' }}>自定义内容</div>
      </KMLayout>
    );
  }
}

KOS.start(Index, 'main');
