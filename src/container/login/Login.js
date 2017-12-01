import React from 'react';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Logo from '../../component/logo/Logo';
import { login } from '../../redux/user.redux';
import imoocForm from '../../component/imoocForm/ImoocForm';

@connect(
  state => state.user,
  { login }
)
@imoocForm
class Login extends React.Component{
  constructor (props) {
    super(props);
    this.state = {}
  }

  register = () => {
    this.props.history.push('/register');
  }

  handleLogin = () => {
    this.props.login(this.props.state);
  }

  render () {
    const { pathname } = this.props.location;
    const redirectTo = this.props.redirectTo;

    return (
      <div>
        {(redirectTo && redirectTo !== pathname) ? <Redirect to={redirectTo} /> : null}
        <Logo />
        <WingBlank>
          <List>
            {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
            <InputItem
              onChange={val => this.props.handleChange('user', val)}
            >用户</InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
              onChange={val => this.props.handleChange('pwd', val)}
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