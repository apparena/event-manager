import * as AuthActions from "../../actions/auth";
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.login = this.login.bind(this);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      btn_loading: false
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      btnDisabled: false
    });
  }

  login() {
    this.props.login(this.state.email, this.state.password)
  }

  render() {
    return (
      <div>
        <input name="email" onChange={this.handleInputChange} defaultValue={this.state.email}/>
        <input name="password" onChange={this.handleInputChange} defaultValue={this.state.password}/>
        <div onClick={this.login}>
          Login
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    auth: state.auth
  }),
  (dispatch) => ({
    ...bindActionCreators(AuthActions, dispatch)
  })
)(LoginContainer);
