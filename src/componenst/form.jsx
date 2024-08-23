import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropDownModal from './DropDownModal';
import { Modal } from 'react-bootstrap';

const Form = (props) => {

    const randomNumber = Math.floor(Math.random() * 1000000) + 1;

    const [data, setData] = React.useState({

        id: randomNumber, name: "", phone: "", education: "", picture: ""
    });

    const [showModal, setShowModal] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);

    const handleChange = (e) => {    /* onChange funktsiooni formis info kogumiseks dara state i.  */
        setData(prevData => ({    /* tagastab vana endise objekti  välja arvatud nime väli, mis annab sellele uue väärtuse */
            ...prevData,                /* onChange update ib iga sisse typeitud tähe/sümboliga antud välja objektis */
            [e.target.name]: e.target.value
        }));
    };



    const handleFileChange = (e) => {
        setData(prevData => ({
            ...prevData,
            picture: e.target.files[0]
        }));
    };

    const handleSubmit = (e) => {

        console.log(data)
        e.preventDefault();
        props.addItem(data); //saadame data andmed  add itemi funktsioonile poripside kaudu, asub App.js
        setData({
            id: randomNumber, name: "", phone: "", education: "", picture: "" //tühjendab väljad
        });


    };

    const handleItemClick = (person) => {
        console.log(person.name, person.id)
        setShowModal(true);
        setSelectedPerson(person);
    }

    const closeModal = () => {
        // Close the modal
        setShowModal(false);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder='Enter your name'
                        onChange={handleChange}
                        name="name"
                        value={data.name}
                    />
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder='Enter your phone'
                        onChange={handleChange}
                        name="phone"
                        value={data.phone}
                    />
                    <input
                        type="text"
                        className="form-control"
                        id="education"
                        placeholder='Enter your education'
                        onChange={handleChange}
                        name="education"
                        value={data.education}
                    />

                    <input
                        type="file"
                        className="form-control"
                        id="file"
                        onChange={handleFileChange}
                        name="image"
                    />
                </div>
                <div className="row">
                    <div className="col">
                        <button type="submit" className="btn  mr-2" style={{ backgroundColor: "#ABA5B1", color: "white" }}>Add new item:</button>
                    </div>
                    <div className="col">
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Dropdown
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {props.people.map((person) => (
                                    <Dropdown.Item key={person.id} onClick={() => handleItemClick(person)}>
                                        {person.name}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>


            </form>
            {selectedPerson && ( // Render the modal if a person is selected
                <DropDownModal show={showModal} onHide={closeModal} person={selectedPerson} />
            )}
        </div>
    );
};

export default Form;
