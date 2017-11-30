import React from 'react';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Logo from '../../component/logo/Logo';
import { login } from '../../redux/user.redux';

@connect(
  state => state.user,
  { login }
)
class Login extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
    }
  }

  register = () => {
    this.props.history.push('/register');
  }

  handleChange = (key, val) => {
    this.setState({
      [key]: val,
    });
  }

  handleLogin = () => {
    this.props.login(this.state);
  }

  render () {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <WingBlank>
          <List>
            {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
            <InputItem
              onChange={val => this.handleChange('user', val)}
            >用户</InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
              onChange={val => this.handleChange('pwd', val)}
            >密码</InputItem>
          </List>
          <WhiteSpace />
          <Button
            type="primary"
            onClick={this.handleLogin}
          >登陆</Button>
          <WhiteSpace />
          <Button
            type="primary"
            onClick={this.register}
          >注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login