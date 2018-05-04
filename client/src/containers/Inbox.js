import React, { Component } from 'react';
import Conversation from '../components/Conversation';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import ReactRouterPropTypes from 'react-router-prop-types';

class Inbox extends Component {
    static propTypes = { cookies: instanceOf(Cookies).isRequired };

    constructor(props) {
        super(props);

        this.state = { messages: [] };

        const { cookies } = this.props;
        this.idToken = cookies.get('id_token');

        const headers = { Authorization: `Bearer ${this.idToken}` };

        // Get messages from the database
        //fetch('/api/messages/as_options', { headers })
        //    .then(res => console.log(res))
    }

    render() {
        return (
            <div>
                <Conversation user={{ name: 'User 1', picture: null }} lastMessage={'Ok, see you tomorrow!'} />
                <Conversation user={{ name: 'User 1', picture: null }} lastMessage={'Ok, see you tomorrow!'} />
            </div>
        );
    }
}

export default withCookies(Inbox);
