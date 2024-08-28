/* import React from 'react';

const Lemmikud = ({ people }) => {
    // Now you can access the people prop directly
    return (
        <div className="container">
            <h2>People:</h2>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>{person.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Lemmikud; */

import React from 'react';
import { Nav } from 'react-bootstrap';
import NavBar from './Nav';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Lemmikud = ({ people, isLiked, removeFromFavorites }) => {
    return (
        <div className="container">

            <NavBar />

            <div className="container">
                <h5>Liked Items:</h5>
                {isLiked.length > 0 && (
                    <div className="row">
                        {isLiked.map((person, index) => (
                            <div className="col-md-4 mb-3" key={index}>
                                <div className="card">
                                    <img
                                        src={person.picture instanceof File
                                            ? URL.createObjectURL(person.picture)
                                            : `${process.env.PUBLIC_URL}${person.picture}`}
                                        className="card-img-top"
                                        alt="A person"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{person.name}</h5>
                                        <p className="card-text">Phone: {person.phone}</p>
                                        <p className="card-text">Education: {person.education}</p>
                                        <button
                                            style={{
                                                backgroundColor: '#FF8A80',
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
                                            onClick={() => removeFromFavorites(person.id)}
                                        >
                                            Remove Item
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {isLiked.length === 0 && <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh', //  full kõrgus
                    marginTop: '-50px',
                }}>
                    <p style={{
                        fontSize: '30px',
                        color: 'rgba(128, 128, 128, 0.8)',
                    }}>No likes</p>
                </div>}
            </div>
        </div>
    );
}

export default Lemmikud;
