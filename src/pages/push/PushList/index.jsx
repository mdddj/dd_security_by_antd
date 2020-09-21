import { PageContainer } from '@ant-design/pro-layout';
import React, { Component } from 'react'
import { Card, Alert, Table, Space, Checkbox } from 'antd';
import { connect } from 'umi';

const column = [
  {
    title: 'uid',
    dataIndex: 'uid',
    key: 'id',
    render: text => <span>{text}</span>,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    render: text => <span>{text}</span>,
  },
  {
    title: '电话号码',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
    render: text => <span>{text ? text : '未绑定'}</span>,
  },
  {
    title: '邮箱验证',
    dataIndex: 'emailVerified',
    key: 'emailVerified',
    render: value => <span><Checkbox checked={value}></Checkbox><span style={{ paddingRight: 10 }}></span>{value ? '已验证' : '未验证'}</span>,
  },

  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>查看</a>
      </Space>
    ),
  },
]

class PushListIndex extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch({
        type: 'google/fetchList',
        payload: {
          token: '',
          size: '10'
        }
      })
    }
  }

  render() {

    const { res, fetchUserListing } = this.props;
    console.log(res);
    console.log(fetchUserListing);

    // if(res){
    //   console.log("数量:"+res.data.users.length);
    // }
    return (
      <PageContainer>
        <Card>
          <Table rowKey='uid' loading={fetchUserListing} columns={column} dataSource={res != null && res.data ? res.data.users : []} />
        </Card>
      </PageContainer>
    )
  }
}


export default connect(({ google, loading }) => ({
  res: google,
  fetchUserListing: loading.effects['google/fetchList']
}))(PushListIndex);