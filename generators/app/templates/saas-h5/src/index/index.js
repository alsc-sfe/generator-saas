import React, { PureComponent } from 'react';
import KOS from 'kos-core';
import { object, func } from 'prop-types';
import { page } from '@alipay/kos-wrapper-pc';
import model from './model';

import './style';

@page({ model })
class Index extends PureComponent {

  static propTypes = {
    userInfo: object,
    dispatch: func,
  }

  render() {
    const { userInfo } = this.props;

    return (
      <div style={{ padding: '20px' }}>{JSON.stringify(userInfo, null, 2)}11</div>
    );
  }
}

KOS.start(Index, 'main');
