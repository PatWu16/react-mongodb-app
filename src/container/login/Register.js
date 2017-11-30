import React from 'react';
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { register } from '../../redux/user.redux';
import Logo from '../../component/logo/Logo';
import '../../index.css';

const RadioItem = Radio.RadioItem;

@connect(
  state => state.user,
  { register }
)
class Register extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
      repeatPwd: '',
      type: 'genius',
    }
  }

  handleChange = (key, val) => {
    this.setState({
      [key]: val,
    });
  }

  handleRegister = () => {
    this.props.register(this.state);
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
            <WhiteSpace />
            <InputItem
              type="password"
              onChange={val => this.handleChange('repeatPwd', val)}
            >确认密码</InputItem>
            <WhiteSpace />
            <RadioItem
              checked={this.state.type === 'genius'}
              onChange={() => this.handleChange('type', 'genius')}
            >
              牛人
            </RadioItem>
            <RadioItem
              checked={this.state.type === 'boss'}
              onChange={() => this.handleChange('type', 'boss')}
            >
              BOSS
            </RadioItem>
            <WhiteSpace />
            <Button
              type="primary"
              onClick={this.handleRegister}
            >注册</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register;
