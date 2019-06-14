import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { page } from '@alipay/page-wrapper';
import { Button, List, Checkbox, Result } from '@alipay/qingtai';

import store from './store';
import { indexType } from './prop-type';
import spmConfig from './spm.config';
import './style.less';

const { func, number, bool, object, shape } = PropTypes;

const Item = List.Item;
const AgreeItem = Checkbox.AgreeItem;

@page({ store, spmConfig })
class Index extends PureComponent {
  static propTypes = {
    dispatch: func,
    initData: shape(indexType).isRequired,
    result: object,
    agree: bool,
    starCount: number,
    star: func,
    setAgree: func,
    buy: func,
  }

  handleBuy = () => {
    const { initData, dispatch, agree } = this.props;
    if (!agree) {
      kBridge.call('showToast', { content: '请同意购买协议！' });
      return;
    }
    dispatch({ type: 'buy', payload: { id: initData.id, price: initData.price } });
  }

  handleStar = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'star' });
  }

  handleAgree = () => {
    const { agree, dispatch } = this.props;
    dispatch({ type: 'setAgree', payload: !agree });
  }

  handleToast = () => {
    kBridge.call('showToast', { content: '同意购买协议' });
  }

  render() {
    const { initData, result, starCount } = this.props;
    if (result) {
      return (
        <div id="index">
          <Result type="success" title="购买成功" />
        </div>
      );
    }
    return (
      <div id="index">
        <List>
          <Item>欢迎使用口碑B端脚手架</Item>
          <Item extra={initData.name}>商品名称</Item>
          <Item extra={`${initData.price}元`}>价格</Item>
          <Item extra="点赞" onClick={this.handleStar}>{starCount}人赞过</Item>
          <AgreeItem onChange={this.handleAgree}>
            同意 <a onClick={this.handleToast}>购买协议</a>
          </AgreeItem>
        </List>
        <Button onClick={this.handleBuy}>立即购买</Button>
      </div>
    );
  }
}

kBridge.ready(() => ReactDOM.render(<Index />, document.querySelector('main')));
