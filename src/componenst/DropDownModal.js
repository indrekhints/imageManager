import { Modal } from 'react-bootstrap';


const DropDownModal = ({ show, onHide, person, picture }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{person.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Name: {person.name}</p>
                <p>Phone: {person.phone}</p>
                <p>Education: {person.education}</p>
                <img src={person.picture instanceof File ? URL.createObjectURL(person.picture) : person.picture} className="card-img-top" />

                {/* You can add more content here */}
            </Modal.Body>
        </Modal>
    );
}

export default DropDownModal

