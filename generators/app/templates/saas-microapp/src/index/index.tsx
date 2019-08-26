import React, { PureComponent } from 'react';
import { page } from '@alipay/kos-wrapper-pc';
import model from './model';
import './style.less';

interface Props {
  userInfo: object;
  dispatch: any;
}

@page({ model })
class Index extends PureComponent<Props, any> {

  public componentDidMount() {
    console.log('did');
  }

  public render() {
    const { userInfo } = this.props;

    return (
      <div className="normal">
        {JSON.stringify(userInfo, null, 2)}
      </div>
    );
  }
}

export default Index;
