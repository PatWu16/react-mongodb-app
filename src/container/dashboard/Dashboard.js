import React from 'react';
import { NavBar } from 'antd-mobile';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import NavLinkBar from '../../component/navLinkBar/NavLinkBar';
import Boss from '../../component/boss/Boss';
import Genius from '../../component/genius/Genius';
import User from '../../component/user/User';

function Msg() {
  return <h1>Msg</h1>
}

@connect(
  state => state,
  {}
)
export default class Dashboard extends React.Component {
  static propTypes = {
    // selectAvatar: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const user = this.props.user;
    const { pathname } = this.props.location;
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Boss,
        hide: user.type === 'genius',
      },
      {
        path: '/genius',
        text: 'boss',
        icon: 'job',
        title: 'BOSS列表',
        component: Genius,
        hide: user.type === 'boss',
      },
      {
        path: '/msg',
        text: '消息',
        icon: 'msg',
        title: '消息列表',
        component: Msg,
      },
      {
        path: '/me',
        text: '我',
        icon: 'user',
        title: '个人中心',
        component: User,
      }
    ];

    return (
      <div className="dashboard">
        <header>
          <NavBar mode="dark">
            {
              navList.find(v => v.path === pathname).title
            }
          </NavBar>
          <div style={{ height: '45px' }} />
        </header>
        <section>
          <Switch>
            {
              navList.map(item => {
                if (item.path === pathname) {
                  return <Route key={item.path} to={item.path} component={item.component} />;
                }
                return null;
              })
            }
          </Switch>
        </section>
        <footer>
          <NavLinkBar navList={navList} />
        </footer>
      </div>
    )
  }
}
