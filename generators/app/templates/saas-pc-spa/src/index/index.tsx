import React, { PureComponent } from 'react';
import KOS from 'kos-core';
import { object, func } from 'prop-types';
import { page } from '@alipay/kos-wrapper-pc';
import model from './model';
import spmConfig from './spm.config';
import './style.less';

@page({ model, spmConfig })
class Index extends PureComponent {
  static propTypes = {
    userInfo: object,
    dispatch: func,
  }

  render() {
    const { userInfo } = this.props;

    return (
      <div styleName="normal">
        {JSON.stringify(userInfo, null, 2)}
      </div>
    );
  }
}

export default KOS.Provider.bind(this, Index);
