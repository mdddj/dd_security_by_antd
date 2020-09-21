import { PageContainer } from '@ant-design/pro-layout';
import React, { Component } from 'react'
import { Card, Alert, Table, Space, Checkbox } from 'antd';
import { connect } from 'umi';


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

    return (
      <PageContainer>
        <Card>

          
        </Card>
      </PageContainer>
    )
  }
}


export default connect(({ google, loading }) => ({
  res: google,
  fetchUserListing: loading.effects['google/fetchList']
}))(PushListIndex);