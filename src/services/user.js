import request from '@/utils/request';
export async function query() {
  return request('/api/users',);
}
// 查询当前登录用户
export async function queryCurrent() {
  return request('/api/current-user');
}
export async function queryNotices() {
  return request('/api/notices');
}
