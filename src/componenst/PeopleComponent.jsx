import React from 'react';
import Card from 'react-bootstrap/Card';
import EditModal from './EditModal';
import { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';




const PeopleComponent = (props) => {                 //  komponent, mis kasutab väärttuste kuvamiseks  props. 
    const [like, setLike] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);




    // state mis kontrolli modal avamist ja sulgemist, vastavalt boolean  väärtusele true or false 

    const openModal = () => {
        setIsModalOpen(prev => !prev); //  modal avamiseks
    };
    const closeModal = () => {
        setIsModalOpen(prev => !prev);// modal sulgemiseks 
    };


    const isPersonIncludedInFolder = (personId, folderId) => {// kontrollime kas antud folderis(antud item.id) asub antud liige  mis vastab id-le
        const folder = props.folders.find(folder => folder.id === folderId);
        return folder && folder.image.some(item => item.id === personId);
    };


    return (
        <>
            <div className="card" style={{ marginTop: "20px" }} >
                <div style={{ position: 'relative' }}>

                    <img src={props.picture instanceof File ? URL.createObjectURL(props.picture) : props.picture} className="card-img-top" />


                    <button
                        style={{
                            backgroundColor: '#343a40',
                            color: '#f8f9fa',
                            border: '1px solid #343a40',
                            marginRight: '10px',
                            padding: '6px 12px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '16px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            margin: '3px'
                        }}
                        onClick={openModal}
                    >Edit
                    </button> {/* // funktsioon mis ava modal i (andmete uuendamine/updateimine) */}
                    <button
                        style={{
                            backgroundColor: '#343a40',
                            color: '#f8f9fa',
                            border: '1px solid #343a40',
                            marginRight: '10px',
                            padding: '6px 12px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '16px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            margin: '3px'
                        }}
                        onClick={() => props.Delete(props.id)}>
                        Delete
                    </button>
                    <button
                        style={{
                            backgroundColor: props.like ? '#ffffff' : '#343a40',
                            color: props.like ? "grey" : '#f8f9fa',
                            border: '1px solid #343a40',
                            marginRight: '10px',
                            padding: '6px 12px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '16px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            margin: '3px'
                        }}
                        onClick={() => props.toggleLike(props.id)}
                    >{props.like ? "Liked" : "Like"}
                    </button>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Phone: {props.phone}</p>
                    <p className="card-text">Education: {props.education}</p>
                </div>

                <div style={{ backgroundColor: '#ffffff' }}>

                    <Link className="navbar-brand" to="/Folders"> <p style={{ backgroundColor: '#343a40', color: "white" }}>Greate folder! <h3>+</h3> </p></Link>
                    {/* *************** list item legend********** */}
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <span><h6 style={{ color: "#C5BFAE" }}>Add item to folder</h6></span>
                        <li style={{ marginBottom: '4px', fontSize: '9px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#5EB19C', marginRight: '5px', display: 'inline-block' }}></div>
                            <span>Included</span>
                        </li>
                        <li style={{ marginBottom: '4px', fontSize: '9px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E5C539', marginRight: '5px', display: 'inline-block' }}></div>
                            <span>Not Included</span>
                        </li>
                    </ul>
                    {/* *************** list item legend********** */}
                    {props.folders && props.folders.map((item) => (
                        <button
                            style={{
                                backgroundColor: isPersonIncludedInFolder(props.id, item.id) ? "#5EB19C" : "#E5C539",//tegemisel ...
                                color: "white",
                                margin: "8px 3px"
                            }}
                            className="btn  mr-2"
                            onClick={() => props.addToFolder(item.id, props.id)}
                            key={item.id}
                        >
                            {item.name}
                        </button>

                    ))}
                </div>

            </div >
            <EditModal isOpen={isModalOpen} /*  Modali komponent , annan props, kaasa , samuti ka addEdited(),  mis asub  App.js is */
                onClose={closeModal}
                namePlaceholder={props.name}
                phonePlaceholder={props.phone}
                educationPlaceholder={props.education}
                addEdited={props.addEdited}
                id={props.id}

            />
        </>
    );
};

export default PeopleComponent;
