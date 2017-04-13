import React, {PropTypes} from "react";
import Faker from "faker";
import {FormattedDate, FormattedRelative} from "react-intl";
import {Media} from "react-bootstrap";

import styles from "../../src/styles/event-overview-list-item.css";

const EventOverviewListItem = ({event, clickHandler}) => {
    return (
        <Media onClick={() => clickHandler(event.id)} className={styles.EventOverviewListItem}>
            <Media.Left>
                <img width={64} height={64} src="//dummyimage.com/64x64/000000/fff&text=E" alt="Image"/>
            </Media.Left>
            <Media.Body>
                <Media.Heading>{event.name} - <FormattedDate value={event.date}/> (<FormattedRelative value={event.date}/>)</Media.Heading>
                <p>{event.excerpt}</p>
                {event.host ? (
                        <small>{event.host.prefix} {event.host.firstName} {event.host.lastName} ({event.host.jobTitle})</small>
                    ) : null}
            </Media.Body>
        </Media>
    );
};

EventOverviewListItem.displayName = "EventOverviewListItem";

EventOverviewListItem.propTypes = {
    clickHandler: PropTypes.func,
    event: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        excerpt: PropTypes.string,
        date: PropTypes.isPrototypeOf(Date),
        host: PropTypes.shape({
            prefix: PropTypes.string,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            jobTitle: PropTypes.string,
            phoneNumber: PropTypes.string
        })
    }).isRequired
};

EventOverviewListItem.defaultProps = {
    clickHandler: () => {
    },
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

export default EventOverviewListItem;