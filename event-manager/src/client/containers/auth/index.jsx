import * as overlayActions from "actions/overlays";
import * as authActions from "actions/auth";
import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {ReactComponent, Modal, ModalHeader, ModalFooter, ModalBody, Button} from "apparena-patterns-react";
import AuthButton from "components/auth/button";
import Login from "containers/auth/login";

class AuthIndexContainer extends ReactComponent {
    getInitState() {
        return {
            email: "",
            password: "",
            hasError: ""
        };
    }

    componentWillUnmount() {
        this.handleClose();
    }

    openSelector() {
        this.props.addOverlay("Auth-Modal", (
            <Modal
                size="md"
            >
                <ModalHeader
                    headerText={this.t("auth.login")}
                    onClose={::this.handleClose}
                />
                <ModalBody>
                    <Login
                        hasError={this.state.hasError}
                        handleInputChange={::this.handleInputChange}
                        handleLogin={::this.handleLogin}
                        handleRefs={::this.handleRefs}
                        email={this.state.email}
                        password={this.state.password}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button
                        type="link"
                        onClick={::this.handleClose}
                    >
                        {this.t("button.cancel")}
                    </Button>
                    <Button
                        type="primary"
                        onClick={::this.handleLogin}
                    >
                        {this.t("auth.login")}
                    </Button>
                </ModalFooter>
            </Modal>
        ));
    }

    handleRefs(name, ref) {
        this[name] = ref;
    }

    handleLogin() {
        const {email, password} = this.state;
        if (email && password) {
            this.setState({
                btn_loading: true
            });
            this.props.login(email, password);
        } else if (email) {
            this.password.focus();
            this.setState({
                hasError: "email"
            })
        } else {
            this.email.focus();
            this.setState({
                hasError: "password"
            })
        }
    }

    handleInputChange(e) {
        this.setState({
            [e.target.id]: e.target.value,
            hasError: ""
        });
    }

    handleClose() {
        this.props.closeOverlay("Auth-Modal");
    }

    render() {
        return (
            <AuthButton
                {...this.props}
                {...this.state}
                openSelector={::this.openSelector}
            />
        )
    }
}

export default connect(
    (state) => ({
        appId: state.appId,
        auth: state.auth,
    }),
    (dispatch) => ({
        ...bindActionCreators(overlayActions, dispatch),
        ...bindActionCreators(authActions, dispatch)
    })
)(AuthIndexContainer);