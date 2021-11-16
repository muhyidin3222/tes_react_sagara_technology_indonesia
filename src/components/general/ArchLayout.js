import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Layout, Menu, Avatar, Dropdown, Button, Typography } from 'antd'
import { Redirect, useHistory } from 'react-router-dom'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

import {
  COLLAPSED,
  INNER_WIDTH
} from "actions";
import 'assets/Index.scss'

const { Header, Content, Footer } = Layout

const ArchLayout = (props) => {
  const { user: {
    cookieDeleted,
    theme,
  } } = useSelector(state => state)
  const dispatch = useDispatch()
  const history = useHistory()
  const pathname = history.location.pathname


  const collapsedChange = (condition) => {
    dispatch({
      type: COLLAPSED,
      collapsed: condition,
    })
  }

  useEffect(() => {
    function handleResize() {
      dispatch({
        type: INNER_WIDTH,
        innerWidth: window.innerWidth,
      })
      // console.log(window.innerWidth, window.width)
      if (window.innerWidth > 900) {
        collapsedChange(false)
      } else {
        collapsedChange(true)
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    history.push("/login")
  }

  const menu = (
    <Menu>
      <Menu.Item key="logout">
        <Button
          type="link"
        >
          {"Admin"}
        </Button>
      </Menu.Item>
      <Menu.Item
        key="logout"
        icon={<LogoutOutlined />}
        type="link"
        danger
        onClick={() => handleLogout()}
        style={{ paddingLeft: 30 }}
      >
        Logout
      </Menu.Item>
    </Menu>
  )

  if (cookieDeleted === true) {
    return (<Redirect to='/login' />)
  }

  return (
    <Layout>
      <Header
        className="arch-header"
        style={{ backgroundColor: theme === "dark" ? "#001529" : "#fff", height: 80, display: "flex", alignItems: "center" }}
      >
        <div className="arch-header-container">
          <img src={require('../../assets/icons/bisa_eskpor.svg')} alt='bisa eskpor - Admin' style={{ height: 30 }} onClick={() => history.push('/')} />
          <Button type="primary" size="large" onClick={() => history.push(pathname === "/register" ? "/login" : "/register")}>{pathname !== "/register" ? "Register" : "Login"}</Button>
        </div>
      </Header>

      <Content className="arch-container">
        <div className="wp-container">
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Copyright ©2021 Created by Ahmad muhyidin</Footer>
    </Layout>
  )
}

export default ArchLayout