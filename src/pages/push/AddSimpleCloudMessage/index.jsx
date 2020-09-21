import { PageContainer } from '@ant-design/pro-layout';
import React, { Component } from 'react'
import { Card, Alert, Table, Space, Checkbox, Row, Col, Form, Input, Button, Spin, Image  } from 'antd';
import { connect } from 'umi';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class PushListIndex extends Component {
  formRef = React.createRef();

  onFinish = values => {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch({
        type: 'google/pushSimpleCloudMessage',
        payload: values
      })
    }
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render() {


    const { pushing } = this.props;
    console.log(pushing);
    return (
      <PageContainer>
        <Spin tip="正在推送消息中..." spinning={pushing ? pushing : false}>
          <Card title="消息编辑" >
            <Row>
              <Col span={12} offset={6}>
                <Row >
                  <Col span={12}>
                    <Form
                      {...layout}
                      ref={this.formRef}
                      name="basic"
                      layout='vertical'
                      initialValues={{ remember: true }}
                      onFinish={this.onFinish}
                      onFinishFailed={this.onFinishFailed}
                    >
                      <Form.Item
                        label="通知标题"
                        name="pushTitle"
                        rules={[{ required: true, message: '请输入通知标题!' }]}
                      >
                        <Input placeholder="请输入通知栏标题" />
                      </Form.Item>

                      <Form.Item
                        label="通知内容"
                        name="pushContent"
                        rules={[{ required: true, message: '请输入通知内容!' }]}
                      >
                        <Input.TextArea rows={3} placeholder="请输入通知内容" />
                      </Form.Item>
                      <Form.Item
                        label="设备Token"
                        name="pushToken"
                        rules={[{ required: true, message: '请输入token!' }]}
                      >
                        <Input.TextArea rows={5} placeholder="请输入用户Token" />
                      </Form.Item>
                      <Form.Item>
                        <Button htmlType="submit" type="primary">立即推送</Button>
                      </Form.Item>
                    </Form>
                  </Col>
                  <Col span={12}>
                    <Image src="http://demo.picbed.pro/static/upload/huang/2020/09/19/16004873863212978.png" width={300} />
                  </Col>
                </Row>
              </Col>
            </Row>

          </Card></Spin>
      </PageContainer>
    )
  }
}


export default connect(({ google, loading }) => ({
  res: google,
  fetchUserListing: loading.effects['google/fetchList'],
  pushing: loading.effects['google/pushSimpleCloudMessage']
}))(PushListIndex);