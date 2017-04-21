import React, {Component, PropTypes} from "react";
import EventOverviewList from "./event-overview-list";
import EventDetail from "./event-detail";

import Faker from "faker";
import styles from "../../src/styles/event-widget.css";

export default class EventWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentEvent: null,
            showRegistrationModal: false
        };
        this.handleEventListItemClick = this.handleEventListItemClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleShowRegistrationModal = this.handleShowRegistrationModal.bind(this);
        this.handleHideRegistrationModal = this.handleHideRegistrationModal.bind(this);
    }

    handleEventListItemClick(id) {
        let event = this.props.events.find((event) => event.id === id);
        this.setState({
            currentEvent: event
        });
    }

    handleBackClick() {
        this.setState({
            currentEvent: null
        });
    }

    handleShowRegistrationModal() {
        this.setState({showRegistrationModal: true});
    }

    handleHideRegistrationModal() {
        this.setState({showRegistrationModal: false});
    }

    render() {
        let currentEvent = this.state.currentEvent;
        let events = this.props.events;
        return (
            <div className={styles}>
                {currentEvent ? (
                        <EventDetail event={currentEvent} backClickHandler={this.handleBackClick}
                                     showRegistrationModal={this.state.showRegistrationModal}
                                     showRegistrationModalHandler={this.handleShowRegistrationModal}
                                     hideRegistrationModalHandler={this.handleHideRegistrationModal}/>
                    ) : (
                        <EventOverviewList events={events} itemClickHandler={this.handleEventListItemClick}/>
                    )
                }
            </div>
        );
    }
}

EventWidget.displayName = "EventWidget";

EventWidget.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
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
    ),
};

EventWidget.defaultProps = {
    events: [
        {
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
        },
        {
            id: 2,
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
        },
        {
            id: 3,
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
        },
        {
            id: 4,
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
        },
    ]
};