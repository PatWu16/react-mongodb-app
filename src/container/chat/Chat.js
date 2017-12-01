import React from 'react';
import { List, InputItem } from 'antd-mobile';
// import PropTypes from'prop-types';
import {connect} from 'react-redux';

import { getMsgList } from '../../redux/chat.redux';

@connect(
  state => state,
  { getMsgList }
)
export default class Chat extends React.Component {
  static propTypes = {
    // selectAvatar: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      msg: [],
    };
  }

  componentDidMount() {
    this.props.getMsgList();
    // socket.on('recvMsg', (data) => {
    //   this.setState({
    //     msg: [...this.state.msg, data.text]
    //   })
    // });
  }

  handleSubmit = () => {
    // socket.emit('sendmsg', {text: this.state.text});
    this.setState({text: ''});
  }

  render() {
    return (
      <div>
        {
          this.state.msg.map((item, index) => {
            return (
              <p key={index}>{item}</p>
            )
          })
        }
        <div className="stick-footer">
          <List>
            <InputItem
              placeholder="请输入信息"
              value={this.state.text}
              onChange={(v) => {
                this.setState({
                  text: v
                })
              }}
              extra={<span onClick={() => this.handleSubmit()}>发送</span>}
            />
          </List>
        </div>
      </div>
    )
  }
}
