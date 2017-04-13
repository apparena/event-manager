import React, {PropTypes} from "react";
import Faker from "faker";
import EventOverviewListItem from "./event-overview-list-item";
import {Panel} from "react-bootstrap";

const EventOverviewList = ({events, itemClickHandler}) => {
    const renderEventListItems = (eventsArr, itemClickHandler) => {
        return eventsArr.map((event) => (
            <EventOverviewListItem event={event} clickHandler={itemClickHandler}/>
        ));
    };
    const title = (
        <h3>Events</h3>
    );
    return (
        <Panel header={title} className="event-overview-list">
            {renderEventListItems(events, itemClickHandler)}
        </Panel>
    );
};

EventOverviewList.displayName = "EventOverviewList";

EventOverviewList.propTypes = {
    itemClickHandler: PropTypes.func,
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

EventOverviewList.defaultProps = {
    itemClickHandler: () => {
    },
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

export default EventOverviewList;