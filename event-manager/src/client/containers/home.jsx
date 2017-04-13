import React, {PropTypes} from "react";
import * as eventsActions from "../actions/events"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Home from "../components/home";
/**/
import Notifications from "react-notify-toast";
/**/
//import { /** TODO GET, SET */ } from "../actions/events";

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: ""
        };
    }

    componentDidMount() {
        //this.props.getEvents();        //todo action event

    }

    componentWillReceiveProps(nextProps, nextContext) {
        //todo loading false
        console.log(nextProps);
    }

    addEvent() {
        const event = {
            name: this.state.eventName
        };
        this.props.addEvent(event)
    }

    render() {

        const {events} =  this.props;
        const {eventName} = this.state;
        console.log('events in render', events);
        return (
            <div>
                <input name="eventName" value={eventName} type="text" onChange={(e) => {
                    this.setState({
                        [e.target.name]: e.target.value,
                    });
                }}/>
                <div onClick={this.addEvent.bind(this)}>
                    Test
                </div>
            </div>

        );
    }
}

export default connect(
    (state) => ({
        events: state.events,
    }),
    (dispatch) => ({
        ...bindActionCreators(eventsActions, dispatch)
    })
)(HomeContainer);