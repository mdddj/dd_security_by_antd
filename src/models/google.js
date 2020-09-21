import { users , pushSimpleCloudMessage} from '@/services/google';
import { message,Modal } from 'antd';

const GoogleModel = {
    namespace: 'google',
    state: {
        data: undefined
    },
    effects: {
        *fetchList({ payload }, { call, put }) {
            const response = yield call(users, payload);
            if (response.state == 200) {
                yield put({
                    type: 'changeUserList',
                    payload: response.data
                })
            } else {
                message.error(response.message);
            }

        },
        *pushSimpleCloudMessage({payload},{call,put}) {
            const response = yield call(pushSimpleCloudMessage,payload);
            if(response.state == 200){
                message.success(response.message);
                Modal.success({
                    content: response.message,
                  });
            }else{
                message.error(response.data.push_message);
                Modal.error({
                    title: "推送失败",
                    content: response.data.push_message,
                  });
            }
        }
    },
    reducers: {
        changeUserList(state, { payload }) {
            return { ...state, data: payload }
        }
    }
}

export default GoogleModel;