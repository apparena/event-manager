import React, {PropTypes} from "react";
import {connect} from "react-redux";
import Home from "../components/home";
/**/
import Notifications from "react-notify-toast";
/**/
//import { /** TODO GET, SET */ } from "../actions/events";

class HomeContainer extends React.Component {
    componentDidMount() {
        //todo action event
    }

    componentWillReceiveProps(nextProps, nextContext) {
        //todo loading false
    }

    render() {
        const props = this.props;
        const {checked, value} = props;
        return (
            <Home value={value} checked={checked}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        checked: state.checkBox.checked, value: state.number.value
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeCheck: () => {
            dispatch(toggleCheck());
        },
        onIncrease: () => {
            dispatch(incNumber());
        },
        onDecrease: () => {
            dispatch(decNumber());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
