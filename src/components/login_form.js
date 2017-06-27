import React, { Component } from 'react';
import { Card, CardSection, Input, Button, ErrorView, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser(email, password);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />
    }

    return <Button title='Login' onPress={this.onButtonPress.bind(this)} />;
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='example@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <ErrorView error={this.props.error} />
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

function mapStateToProps({ auth }) {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);