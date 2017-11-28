import React from 'react';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'

import Logo from '../../component/logo/Logo';

class Login extends React.Component{
  register = () => {
    this.props.history.push('/register');
  }

  render () {
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            <InputItem>用户</InputItem>
            <WhiteSpace />
            <InputItem>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary">登陆</Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login