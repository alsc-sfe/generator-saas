import { message } from 'antd';
import { getUserInfo } from './service';

export default {
  namespace: 'index',

  initial: {
    loading: false,
    userInfo: {},
  },

  reducers: {
    initParam(state: any, action: any) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },

  asyncs: {
    async getUserInfo(dispatch: any, getStateL: any, payload: any) {
      try {
        const res = await getUserInfo();
        dispatch({ type: 'initParam', payload: { userInfo: res } });
      } catch (err) {
        message.info(err.message);
      }
    },
  },

  /**
  * 初始化请求
  * @param dispatch
  * @param getState
  * @param {object}
  * @property param 请求参数，包括url中的请求参数和离线包的startParams
  * @property extra 当调用`this.props.reload`时，传入的参数。
  * @return {any}
  */
  async setup(dispatch: any, getState: any, { param }: any) {
    try {
      console.log(param);
      dispatch({ type: 'getUserInfo' });
    } catch (err) {
      dispatch({ type: 'setErr', payload: err });
    }
  },
};
