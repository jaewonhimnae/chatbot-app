import React, { Component } from 'react'
import { List } from 'antd';
import moment from 'moment';

export class Message extends Component {

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => {
            this.forceUpdate();
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }

    render() {

        let { time, text } = this.props;

        if (moment().unix() > time + (3)) {
            return (
                <List.Item style={{ padding: '1rem' }}>
                    <p>

                    </p>
                </List.Item>
            )
        } else {
            return (
                <List.Item style={{ padding: '1rem' }}>
                    <p>
                        {text}
                    </p>
                </List.Item>
            )
        }
    }
}

export default Message
