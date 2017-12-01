import React from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import PropTypes from'prop-types';
import { withRouter } from 'react-router-dom';

@withRouter
export default class UserCard extends React.Component {
  static propTypes = {
    userList: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (v) => {
    this.props.history.push(`/chat/${v.user}`);
  }

  render() {
    return (
      <div>
        {
          this.props.userList.map(item => {
            return item.avatar ? (
              <div key={item._id}>
                <Card onClick={(v) => this.handleClick(v)}>
                  <Card.Header
                    title={item.user}
                    thumb={require(`../avatarSelector/img/${item.avatar}.png`)}
                    extra={<span>{item.title}</span>}
                  />
                  <Card.Body>
                    <div>
                      {
                        item.company ? <div>公司：{item.company}</div> : null
                      }
                      {
                        item.desc.split('\n').map(item => (
                          <div key={item}>{ item }</div>
                        ))
                      }
                      {
                        item.money ? <div>薪资：{item.money}</div> : null
                      }
                    </div>
                  </Card.Body>
                </Card>
                <WhiteSpace />
              </div>
            ) : null
          })
        }
      </div>
    )
  }
}
