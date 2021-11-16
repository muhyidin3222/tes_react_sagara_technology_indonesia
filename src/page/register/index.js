import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Layout, Card, Radio, Menu, AutoComplete } from 'antd'
import ArchLayout from 'components/general/ArchLayout'

const { Content } = Layout

const Login = () => {
  const history = useHistory()
  const [form] = Form.useForm();

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
                    label="First name"
                    name="firstName"
                    rules={[{ required: true, message: 'Please input your First name!' }]}
                  >
                    <Input
                      size="large"
                      placeholder="Jaka"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Last name"
                    name="lastName"
                    rules={[{ required: true, message: 'Please input your Last name!' }]}
                  >
                    <Input
                      size="large"
                      placeholder="Rama"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password
                      type="password"
                      size="large"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Jenis kelamin"
                    name="js"
                    rules={[{ required: true, message: 'Please input your Jenis kelamin!' }]}
                  >
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                      <Radio.Button value="a">Laki-Laki</Radio.Button>
                      <Radio.Button value="b">Perempuan</Radio.Button>
                    </Radio.Group>
                  </Form.Item>

                  <Form.Item
                    label="Kota"
                    name="kota"
                    rules={[{ required: true, message: 'Please input your Kota!' }]}
                  >
                    <AutoComplete
                      placeholder="Surakarta"
                      options={[{ value: 'Surakarta' }, { value: 'Bekasi' }, { value: 'Salatiga' }, { value: 'Malang' }, { value: 'Karangayar' }]}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Provinsi"
                    name="provinsi"
                    rules={[{ required: true, message: 'Please input your Provinsi!' }]}
                  >
                    <AutoComplete
                      placeholder="Jakarta"
                      options={[{ value: 'Jakarta' }, { value: 'Yogyakarta' }, { value: 'Surabayar' }]}
                    />
                  </Form.Item>


                  <Form.Item>
                    <Button type="primary" style={{ marginTop: 10 }} htmlType="submit" className="login-form-button" size="large">
                      Sigin
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