import React, { Fragment, useState } from 'react'
import { Button } from 'react-bootstrap'
import NavBar from './Nav'
import Modal from 'react-bootstrap/Modal';

const Folders = ({ people, setPeople, isLiked, removeFromFavorites, folders, setFolders }) => {

    const randomNumber = Math.floor(Math.random() * 1000000) + 1;
    const [showEditModal, setShowEditModal] = useState(false);
    const [newFolder, setNewFolder] = useState(
        {
            id: randomNumber,
            name: "",
            image: [],
            description: "",
            visibility: true,

        }
    )

    const greateDirectory = (e) => {

        console.log(folders)
        e.preventDefault();


        setFolders(prevFolders => [...prevFolders, newFolder]);
        setNewFolder({
            id: randomNumber, name: "", image: [], description: "", visibility: true
        });
    }




    const handleChange = (e) => {    /* onChange funktsiooni formis info kogumiseks newFolder state i.  */
        setNewFolder(prev => ({
            ...prev,                /* onChange updatetib iga sisse typei tud tähe/sümboliga antud välja objektis */
            [e.target.name]: e.target.value
        }));

    };
    const handleVisibility = (itemId) => {
        setFolders(prevFolders =>
            prevFolders.map(item =>
                item.id === itemId ? { ...item, visibility: !item.visibility } : item
            )
        );
    };
    console.log(folders)

    const handleEditClick = () => {
        setShowEditModal(true);
    };

    const handleEditModalClose = () => {
        setShowEditModal(false);
    };
    /*    **********************editi delete folder Name*************************** */
    const editDirectory = (itemId) => {
        setFolders(prevFolders =>
            prevFolders.map(item =>
                item.id === itemId ? { ...item, name: newFolder.name } : item
            )
        );
        setShowEditModal(false);
        setNewFolder({
            id: randomNumber, name: "", image: [], description: "", visibility: true
        });
    };
    const deleteFolder = (itemId) => {
        setFolders(prevFolders => prevFolders.filter(item => item.id !== itemId));
    };
    /*    **********************editi delete folder Name*************************** */

    return (

        <div className="container">
            <NavBar />
            <form onSubmit={greateDirectory}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder='Enter folder name'
                        onChange={handleChange}
                        name="name"
                        value={newFolder.name}
                    />
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder='Enter some description'
                        onChange={handleChange}
                        name="description"
                        value={newFolder.description}
                    />

                </div>
                <div className="row">
                    <div className="col">
                        <button type="submit" className="btn mr-2" style={{ backgroundColor: "#C7C5CA" }}>Greate</button>
                    </div>
                </div>


            </form>

            {folders && folders.map((item) => (
                <div className="border border-secondary bg-light shadow-sm my-2 pb-0" key={item.id}>
                    <div
                        className="mb-0 text-light text-uppercase d-flex justify-content-between align-items-center"
                        style={{ cursor: "pointer", backgroundColor: "#575160" }}
                        onClick={() => handleVisibility(item.id)}
                    >{/* ****************************  folder Name edit  delete. Dolders kaust ******************** */}
                        <span>FOLDER: {item.name}{item.description}</span>
                        <div style={{ paddingLeft: "10px" }}>
                            <span style={{ marginRight: "30px" }} onClick={handleEditClick}>EDIT</span>
                            <span style={{ marginLeft: "30px" }} onClick={() => deleteFolder(item.id)}>DELETE</span>
                        </div>
                        <Modal show={showEditModal} onHide={handleEditModalClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Edit Folder Name</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="edit_name"
                                    placeholder={item.name}
                                    onChange={handleChange}
                                    name="name"
                                    value={newFolder.name}
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleEditModalClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => editDirectory(item.id)}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                    {/* ****************************  edit  delete. Dolders kaust ******************** */}
                    {/* ****************************  kausta sisut  ******************** */}
                    {item.visibility && (
                        <div className="border p-2">
                            {item.image.length > 0 && (
                                <>
                                    {item.image.length > 0 ? (

                                        <div className="d-flex align-items-center">
                                            {item.image.map((unit, index) => (
                                                <img
                                                    src={unit.img instanceof File ? URL.createObjectURL(unit.img) : unit.img}
                                                    alt="Image"
                                                    key={index}
                                                    style={{
                                                        marginRight: '10px',
                                                        width: '300px',
                                                        height: 'auto',
                                                        borderRadius: '10px'
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p style={{ color: "E1DEE5" }}>The folder is empty now!</p>
                                    )}

                                </>
                            )}
                        </div>
                    )}
                </div>

            ))}

            {/* ****************************  kausta sisu  ******************** */}
        </div>


    )

}

export default Folders