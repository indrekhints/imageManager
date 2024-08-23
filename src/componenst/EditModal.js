// EditModal.js
import React, { useState } from 'react';

const EditModal = (props) => {
    const [newItem, setNewItem] = useState({
        name: "",
        phone: "",
        education: "",
        picture: null,
        id: "",

    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem(prevItem => ({
            ...prevItem,
            [name]: value

        })
        )
    }
    const handleFileChange = (e) => {
        setNewItem(prevItem => ({
            ...prevItem,
            picture: e.target.files[0]
        }));
    };

    return (
        <div className={`modal ${props.isOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: props.isOpen ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content" style={{ background: 'lightgrey', color: '#333' }}>
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Details</h5>
                        <button type="button" className="close" onClick={props.onClose} style={{ color: '#333' }}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <form style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="form-group" style={{ borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
                                <label htmlFor="name">Name:</label>
                                <input type="text"
                                    className="form-control"
                                    id="name" name="name"
                                    style={{ backgroundColor: 'transparent', color: '#333', border: 'none', flex: 1, outline: 'none' }}
                                    placeholder={props.namePlaceholder}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group" style={{ borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
                                <label htmlFor="phone">Phone:</label>
                                <input type="text"
                                    className="form-control"
                                    id="phone" name="phone"
                                    style={{ backgroundColor: 'transparent', color: '#333', border: 'none', flex: 1, outline: 'none' }}
                                    placeholder={props.phonePlaceholder}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group" style={{ borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
                                <label htmlFor="education">Education:</label>
                                <input type="text"
                                    className="form-control"
                                    id="education"
                                    name="education"
                                    style={{ backgroundColor: 'transparent', color: '#333', border: 'none', flex: 1, outline: 'none' }}
                                    placeholder={props.educationPlaceholder}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group" style={{ borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>

                                <input type="file"
                                    className="form-control-file"
                                    id="picture" style={{ backgroundColor: 'transparent', color: '#333', border: 'none', flex: 1, outline: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </div>
                        </form>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={props.onClose} style={{ backgroundColor: '#333', color: 'white' }}>Close</button>
                        <button type="button" className="btn btn-primary" style={{ backgroundColor: '#333', color: 'white' }} onClick={() => props.addEdited(props.id, newItem)}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
