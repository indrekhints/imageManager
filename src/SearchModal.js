import { Modal, Card } from 'react-bootstrap';
import React, { useRef } from 'react';

const SearcModal = ({ show, onHide, searchFilter, Proov }) => {

    return (
        <Modal show={show} onHide={onHide} >
            <Modal.Header closeButton>
                <Modal.Title>Search Results</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {searchFilter.map((item, index) => (
                    <Card key={index} style={{ width: '18rem', marginBottom: '1rem' }}>
                        <Card.Img variant="top" src={item.picture instanceof File ? URL.createObjectURL(item.picture) : item.picture} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                Phone: {item.phone}<br />
                                Education: {item.education}<br />
                                id: {item.id}
                            </Card.Text>
                            <button onClick={Proov} className="btn btn-dark rounded-pill text-light">
                                Go to original!
                            </button>
                        </Card.Body>
                    </Card>
                ))}

            </Modal.Body>
        </Modal>
    );
}

export default SearcModal;
