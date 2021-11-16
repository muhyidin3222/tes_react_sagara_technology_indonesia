import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Layout, Card } from 'antd'
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import ArchLayout from 'components/general/ArchLayout'

const { Content } = Layout

const Login = () => {
  const [form] = Form.useForm();
  const history = useHistory()

  const handleSubmit = async (e, type) => {
    history.push("/")
  }

  return (
    <ArchLayout>
      <Content>
        <div className='content'>
          <Card
            style={{ width: '100%', marginTop: 80 }}
          >
            <div className='form-container' style={{ marginTop: 40 }}>
              <section className="container">
                <Form
                  form={form}
                  onFinish={handleSubmit}
                  className="login-form"
                  layout="vertical"
                >
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                  >
                    <Input
                      prefix={<FaUserAlt type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      size="large"
                      placeholder="...@gmail.com"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password
                      prefix={<RiLockPasswordFill type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      size="large"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" style={{ marginTop: 10 }} htmlType="submit" className="login-form-button" size="large">
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </section>

            </div>
          </Card>
        </div>
      </Content>

    </ArchLayout>
  )
}
export default Login