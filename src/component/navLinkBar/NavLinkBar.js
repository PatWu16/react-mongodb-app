import React from 'react';
import { TabBar } from 'antd-mobile';
import PropTypes from'prop-types';
import { withRouter } from 'react-router-dom';

@withRouter
export default class NavLinkBar extends React.Component {
  static propTypes = {
    navList: PropTypes.array.isRequired,
  }

  render() {
    const navList = this.props.navList.filter(item => !item.hide);
    const { pathname } = this.props.location;
    return (
      <div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {
            navList.map(item => {
              return (
                <TabBar.Item
                  title={item.text}
                  key={item.text}
                  icon={{ uri: require(`./navImg/${item.icon}.png`) }}
                  selectedIcon={{ uri: require(`./navImg/${item.icon}-active.png`) }}
                  selected={item.path === pathname}
                  onPress={() => {
                    this.props.history.push(item.path);
                  }}
                >
                </TabBar.Item>
              )
            })
          }
        </TabBar>
      </div>
    )
  }
}
