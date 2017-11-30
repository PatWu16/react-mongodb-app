import React from 'react';
import { WhiteSpace } from 'antd-mobile';
// import PropTypes from'prop-types';
import {connect} from 'react-redux';

import { getUserList } from '../../redux/chatuser.redux';
import UserCard from '../usercard/UserCard';

@connect(
  state => state.chatuser,
  { getUserList }
)
export default class Genius extends React.Component {
  static propTypes = {
    // selectAvatar: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getUserList('boss');
  }

  render() {
    return (
      <div>
        <WhiteSpace />
        <UserCard userList={this.props.userlist} />
      </div>
    )
  }
}
