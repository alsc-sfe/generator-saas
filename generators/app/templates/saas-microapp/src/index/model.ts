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
    async getUserInfo(dispatch: any) {
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
  * @param action {object}
  * @property action.payload.param 请求参数
  * @return {any}
  */
  async setup(dispatch: any, getState: any, action: any) {
    try {
      console.log(action.payload.param);
      dispatch({ type: 'getUserInfo' });
    } catch (err) {
      dispatch({ type: 'setErr', payload: err });
    }
  },
};
