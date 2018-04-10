import React, { Component } from 'react';
import logo from './../logo.svg';
import '../css/App.css';

import { Container, Header, Form } from 'semantic-ui-react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { info: [] };
  }

  componentDidMount() {
    fetch('/api/app_info')
      .then(res => res.json())
      .then(info => this.setState({ info }));
  }

  render() {
    return (
      <Container>
        <div>
          <Header as="h1">Login</Header>
          <Form>
            <Form.Input label="Name" type="email" placeholder="you@email.com"/>
            <Form.Input label="Password" type="password"/>
          </Form>
        </div>
      </Container>
    );
  }
}

export default Login;
