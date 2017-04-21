import React, {PropTypes} from "react";
import Faker from "faker";
import {Button, ControlLabel, FormControl, FormGroup, Modal, HelpBlock} from "react-bootstrap";

const AdminModal = ({event, showState, hideHandler, handleChange, saveEvent, submitting}) => {
  return (
    <Modal show={showState} onHide={hideHandler}
           dialogClassName="event-registration-modal" bsSize="large" aria-labelledby="contained-modal-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-lg">Event hinzufügen</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              name="name"
              value={event.name}
              placeholder="Enter text"
              onChange={handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              name="data_start"
              value={event.data_start}
              placeholder="Enter text"
              onChange={handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              name="data_end"
              value={event.data_end}
              placeholder="Enter text"
              onChange={handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hideHandler}>Close</Button>
        <Button bsStyle="primary" onClick={saveEvent} disabled={submitting}>{submitting ? 'Loading...' : 'Save'}</Button>
      </Modal.Footer>
    </Modal>
  );
};

AdminModal.displayName = "AdminModal";

AdminModal.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.isPrototypeOf(Date),
    excerpt: PropTypes.string,
    host: PropTypes.shape({
      prefix: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      jobTitle: PropTypes.string,
      phoneNumber: PropTypes.string
    })
  })
};

AdminModal.defaultProps = {
  event: {
    id: 1,
    name: Faker.lorem.words(),
    excerpt: Faker.lorem.sentences(2),
    date: Faker.date.future(),
    host: {
      prefix: Faker.name.prefix(),
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      jobTitle: Faker.name.jobTitle(),
      phoneNumber: Faker.phone.phoneNumber(),
    }
  }
};

export default AdminModal;
