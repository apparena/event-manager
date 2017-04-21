import React, {PropTypes} from "react";
import * as eventsActions from "../actions/events";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import EventWidget from "../../../../event-widget/src/components/event-widget";

class EventsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }


  componentDidMount() {
    if (!this.props.events.loaded) {
      this.props.getEvents();
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.events.loaded) {
      this.setState({
        loading: false
      });

    }
  }


  render() {
    const {events} = this.props;

    if (this.state.loading) {
      return (
        <div>
          Loading
        </div>
      )
    }
    return (
      <EventWidget events={events.events}/>
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
)(EventsContainer);
