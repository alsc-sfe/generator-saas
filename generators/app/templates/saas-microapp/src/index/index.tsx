import React, { PureComponent } from 'react';
import model from './model';
import './style.less';
import KOS, { KosDispatch } from 'kos-core';

interface Props {
  userInfo: object;
  dispatch: KosDispatch;
}

@KOS.WrapperProvider({ model })
class Index extends PureComponent<Props, any> {

  public componentDidMount() {
    console.log('did');
  }

  public render() {
    const { userInfo } = this.props;

    return (
      <div className="normal">
        {JSON.stringify(userInfo, null, 2)}HELLO MICROAPP
      </div>
    );
  }
}

export default Index;
