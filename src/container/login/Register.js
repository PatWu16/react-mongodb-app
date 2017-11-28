import React from 'react';
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'

import Logo from '../../component/logo/Logo';

const RadioItem = Radio.RadioItem;

class Register extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      type: 'genius',
    }
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
            <WhiteSpace />
            <InputItem>确认密码</InputItem>
            <WhiteSpace />
            <RadioItem checked={this.state.type === 'genius'}>
              牛人
            </RadioItem>
            <RadioItem checked={this.state.type === 'boss'}>
              BOSS
            </RadioItem>
            <WhiteSpace />
            <Button type="primary">注册</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register