import React, {PropTypes} from "react";
import * as eventsActions from "../../actions/events";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import AdminModal from "./modal";
import {Button} from "react-bootstrap";

const EVENT = {
  name: ""
};

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveEvent = this.saveEvent.bind(this);
    this.addEventModal = this.addEventModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.renderEvent = this.renderEvent.bind(this);
    this.state = {
      event: EVENT,
      showModal: false
    }
  }

  componentDidMount() {
    if (!this.props.events.loaded) {
      this.props.getEvents();
    }
  }

  addEventModal() {
    this.setState({
      event: EVENT,
      showModal: true,
    });
  }

  hideModal() {
    this.setState({
      showModal: false,
    });
  }

  saveEvent() {
    this.setState({
      submitting: true
    });
    this.props.addEvent(this.state.event)
      .then(() => {
        this.setState({
          submitting: false,
          showModal: false,
        });
      })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      event: {
        [name]: value
      },
      btnDisabled: false
    });
  }

  editEventModal(event) {
    this.setState({
      event,
      showModal: true
    });
  }

  renderEvent(event) {
    return (
      <div key={event.id} onClick={this.editEventModal.bind(this, event)}>
        {event.name}
      </div>
    )
  }

  render() {
    return (
      <div>
        <Button onClick={this.addEventModal}>Add</Button>
        <AdminModal
          event={this.state.event}
          showState={this.state.showModal}
          submitting={this.state.submitting}
          hideHandler={this.hideModal}
          saveEvent={this.saveEvent}
          handleChange={this.handleInputChange}
        />
        {this.props.events.events.map(this.renderEvent)}
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
