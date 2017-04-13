import React, {PropTypes} from "react";
import Faker from "faker";
import {FormattedDate, FormattedRelative} from "react-intl";
import {Button, Panel, Image} from 'react-bootstrap';
import EventRegistrationModal from "./event-registration-modal";

const EventDetail = ({event, backClickHandler, showRegistrationModal, showRegistrationModalHandler, hideRegistrationModalHandler}) => {
    const title = (
        <h1><Button onClick={backClickHandler} bsSize="xsmall">&larr;</Button> {event.name}</h1>
    );
    return (
        <Panel header={title}>
            <Image src="//dummyimage.com/2800x600/000000/fff&text=EventImage" responsive/>
            <h2><FormattedDate value={event.date}/> (<FormattedRelative value={event.date}/>)</h2>
            <p>{event.excerpt}</p>
            { event.host ? (
                    <small>Host: {event.host.prefix} {event.host.firstName} {event.host.lastName} ({event.host.jobTitle})</small>
                ) : null }
            <p className="text-right"><Button onClick={showRegistrationModalHandler} disabled={showRegistrationModal} bsStyle="primary"
                       bsSize="large">Register</Button></p>
            <EventRegistrationModal event={event} showState={showRegistrationModal}
                                    showHandler={showRegistrationModalHandler}
                                    hideHandler={hideRegistrationModalHandler}/>
        </Panel>
    );
};

EventDetail.displayName = "EventDetail";

EventDetail.propTypes = {
    showRegistrationModalHandler: PropTypes.func,
    hideRegistrationModalHandler: PropTypes.func,
    backClickHandler: PropTypes.func,
    event: PropTypes.shape({
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

EventDetail.defaultProps = {
    backClickHandler: null,
    event: {
        name: Faker.lorem.words(),
        excerpt: Faker.lorem.sentences(2),
        date: Faker.date.past(),
        host: {
            prefix: Faker.name.prefix(),
            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName(),
            jobTitle: Faker.name.jobTitle(),
            phoneNumber: Faker.phone.phoneNumber(),
        }
    }
};

export default EventDetail;