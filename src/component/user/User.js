import React from 'react';
import { Result, List, WhiteSpace, Button, Modal } from 'antd-mobile';
import {connect} from 'react-redux';
import browserCookie from 'browser-cookies';
import { Redirect } from 'react-router-dom';

import { logoutSubmit } from '../../redux/user.redux';

const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;

@connect(
  state => state.user,
  { logoutSubmit }
)
export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = () => {
    alert('提示', '确定要退出登录吗?', [
      { text: '取消', onPress: () => {} },
      { text: '确定', onPress: () => {
          browserCookie.erase('userid');
          this.props.logoutSubmit();
        }
      },
    ]);
  }

  render() {
    return (
      <div>
        {
          this.props.user ? (
            <div>
              <Result
                img={<img style={{width: 60}} src={require(`../avatarSelector/img/${this.props.avatar}.png`)} alt=""/>}
                title={this.props.user}
                message={(this.props.type === 'boss') ? this.props.company : null}
              />
              <List renderHeader={() => '个人简介'}>
                <Item wrap>
                  {this.props.title}
                  {
                    this.props.desc.split('\n').map(item => (
                        <Brief key={item}>{item}</Brief>
                      )
                    )
                  }
                  {this.props.money ? <Brief>薪资：{this.props.money}</Brief> : null}
                </Item>
              </List>
              <WhiteSpace />
              <Button
                type="primary"
                onClick={this.logout}
              >退出登录</Button>
            </div>
          ) : <Redirect to={this.props.redirectTo} />
        }
      </div>)
  }
}
