import request from '@/utils/request';

export async function users(params) {
    return request(`/api/google/user/list?token=${params.token}&size=${params.size}`);
}

export async function pushSimpleCloudMessage(params){
    return request('/api/push_simple',{
        method:'POST',
        data:params
    })
}