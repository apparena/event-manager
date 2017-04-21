import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {auth} from "../../helpers/requests";
import Login from "./login";

export function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth(this.props.auth);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps.auth);
    }

    checkAuth(authData) {
      if (authData.isAuthenticated) {
        auth(authData.token);
      }
    }

    render() {
      return (
        <div>
          {this.props.auth.isAuthenticated === true
            ? <Component {...this.props}/>
            : <Login/>
          }
        </div>
      )

    }
  }

  AuthenticatedComponent.propTypes = {
    auth: PropTypes.object.isRequired,
  };

  return connect(
    (state) => ({
      auth: state.auth
    })
  )(AuthenticatedComponent);
}
