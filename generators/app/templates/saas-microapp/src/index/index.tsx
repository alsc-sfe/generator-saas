import React, { PureComponent } from 'react';
import model from './model';
import './style.less';

interface Props {
  userInfo: object;
  dispatch: any;
}

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
