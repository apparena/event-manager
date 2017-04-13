import React, {PropTypes} from "react";
import Faker from "faker";
import {Modal, Button, FormGroup, InputGroup, FormControl, Glyphicon, DropdownButton, MenuItem} from "react-bootstrap";

const EventRegistrationModal = ({event, showState, hideHandler}) => {
    return (
        <Modal show={showState} onHide={hideHandler}
               dialogClassName="event-registration-modal" bsSize="large" aria-labelledby="contained-modal-title-lg">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">Anmeldung zum Event: {event.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>So einfach gehts</h4>
                <p>Necessitatibus tempora animi dicta perspiciatis tempora a velit in!
                    Doloribus perspiciatis doloribus suscipit nam earum. Deleniti veritatis eaque totam assumenda
                    fuga sapiente! Id recusandae. Consectetur necessitatibus eaque velit nobis aliquid? Fugit illum
                    qui suscipit aspernatur alias ipsum
                    repudiandae! Quia omnis quisquam dignissimos a mollitia. Suscipit aspernatur eum maiores
                    repellendus ipsum doloribus alias voluptatum consequatur. Consectetur quibusdam veniam quas
                    tenetur necessitatibus repudiandae? Rem optio vel alias neque optio sapiente quidem similique
                    reiciendis tempore. Illum accusamus officia
                    cum enim minima eligendi consectetur nemo veritatis nam nisi! Adipisicing nobis perspiciatis
                    dolorum adipisci soluta architecto doloremque voluptatibus omnis debitis quas repellendus.
                    Consequuntur assumenda illum commodi mollitia asperiores? Quis aspernatur consequatur modi
                    veritatis aliquid at? Atque vel iure quos.
                    Amet provident voluptatem amet aliquam deserunt sint, elit dolorem ipsa, voluptas? Quos esse
                    facilis neque nihil sequi non? Voluptates rem ab quae dicta culpa dolorum sed atque molestias
                    debitis omnis! Sit sint repellendus deleniti officiis distinctio. Impedit vel quos harum
                    doloribus corporis. Laborum ullam nemo quaerat
                    reiciendis recusandae minima dicta molestias rerum. Voluptas et ut omnis est ipsum accusamus
                    harum. Amet exercitationem quasi velit inventore neque doloremque! Consequatur neque dolorem vel
                    impedit sunt voluptate. Amet quo amet magni exercitationem libero recusandae possimus pariatur.
                    Cumque eum blanditiis vel vitae
                    distinctio! Tempora!
                    <form>
                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Addon>@</InputGroup.Addon>
                                <FormControl type="text" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <FormControl type="text" />
                                <InputGroup.Addon>.00</InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Addon>$</InputGroup.Addon>
                                <FormControl type="text" />
                                <InputGroup.Addon>.00</InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>

                        <FormGroup>
                            <InputGroup>
                                <FormControl type="text" />
                                <InputGroup.Addon>
                                    <Glyphicon glyph="music" />
                                </InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>

                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Button>
                                    <Button>Before</Button>
                                </InputGroup.Button>
                                <FormControl type="text" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <FormControl type="text" />
                                <DropdownButton
                                    componentClass={InputGroup.Button}
                                    id="input-dropdown-addon"
                                    title="Action"
                                >
                                    <MenuItem key="1">Item</MenuItem>
                                </DropdownButton>
                            </InputGroup>
                        </FormGroup>

                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Addon>
                                    <input type="radio" aria-label="..." />
                                </InputGroup.Addon>
                                <FormControl type="text" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Addon>
                                    <input type="checkbox" aria-label="..." />
                                </InputGroup.Addon>
                                <FormControl type="text" />
                            </InputGroup>
                        </FormGroup>
                    </form>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={hideHandler}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

EventRegistrationModal.displayName = "EventRegistrationModal";

EventRegistrationModal.propTypes = {
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

EventRegistrationModal.defaultProps = {
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

export default EventRegistrationModal;