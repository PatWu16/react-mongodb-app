import React from 'react';
import { Result, List, WhiteSpace, Button } from 'antd-mobile';
import {connect} from 'react-redux';
// import browserCookie from 'browser-cookies';

const Item = List.Item;
const Brief = Item.Brief;

@connect(
  state => state.user,
  {}
)
export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = () => {
    console.log('logout');
    // browserCookie.erase('userid');
  }

  render() {
    return this.props.user ? (
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
    ) : null
  }
}
