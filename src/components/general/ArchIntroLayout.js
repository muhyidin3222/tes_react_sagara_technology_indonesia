import React, { Component } from 'react'
import { Layout, Row, Col, Card } from 'antd'
import 'assets/Index.scss'

const { Content } = Layout

class ArchIntroLayout extends Component {
  render() {
    return (
      <div className='App primary'>
        <Content>
          <div className='content'>
            <div className='arch-row'>
                <div className='logo-login-right'>
                  <img src={require('../../assets/icons/bisa_eskpor.svg')} alt='bisa eskpor - Admin' style={{ height: 70 }} />
                </div>
                <Card
                  style={{ maxWidth: 500, width: '100%' }}
                >
                  <div className='logo-login'>
                    <img src={require('../../assets/icons/bisa_eskpor.svg')} alt='bisa eskpor - Admin' style={{ height: 40 }} />
                  </div>
                  <div className='form-container'>
                    {this.props.children}
                  </div>
                </Card>
            </div>
          </div>
        </Content>
      </div>
    )
  }
}

export default ArchIntroLayout