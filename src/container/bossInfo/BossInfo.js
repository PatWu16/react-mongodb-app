import React from 'react';
import { NavBar, InputItem, TextareaItem, Button, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AvatarSelector from '../../component/avatarSelector/AvatarSelector'
import { update } from '../../redux/user.redux';

@connect(
  state => state.user,
  { update }
)
export default class BossInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      title: '',
      company: '',
      money: '',
      desc: '',
    }
  }

  handleChange = (key, val) => {
    this.setState({
      [key]: val
    });
  }

  render() {
    const pathname = this.props.location.pathname;
    const redirectTo = this.props.redirectTo;
    return (
      <div>
        {(redirectTo && redirectTo !== pathname) ? <Redirect to={this.props.redirectTo} /> : null}
        <NavBar mode="dark">BOSS信息完善页面</NavBar>
        <div style={{ height: '45px' }} />
        <AvatarSelector
          selectAvatar={(val) => {
            this.setState({
              avatar: val,
            })
          }}
        />
        <WhiteSpace />
        <InputItem
          onChange={(val) => this.handleChange('title', val)}
        >
          招聘职位
        </InputItem>
        <InputItem
          onChange={(val) => this.handleChange('company', val)}
        >
          公司名称
        </InputItem>
        <InputItem
          onChange={(val) => this.handleChange('money', val)}
        >
          职位薪资
        </InputItem>
        <TextareaItem
          title="职位要求"
          rows={3}
          autoHeight
          onChange={(val) => this.handleChange('desc', val)}
        />
        <WhiteSpace />
        <Button
          onClick={() => {
            this.props.update(this.state);
          }}
          type="primary"
        >保存</Button>
      </div>
    )
  }
}
