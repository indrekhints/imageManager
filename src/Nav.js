import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearcModal from './SearchModal';
import Content from './Content';



const NavBar = ({ people }) => {

    const [searchInput, setSearchInput] = useState({ name: "" }) //this trach value from input
    const [searchFilter, setSearchFilter] = useState([]) // this where i save  filtered array version
    const [showModal, setShowModal] = useState(false);

    const Search = () => {
        const filteredPeople = people.filter(person =>
            person.name.toLowerCase().includes(searchInput.name.toLowerCase())
        );
        setSearchFilter(filteredPeople);
        console.log(filteredPeople);
        setShowModal(true)

    };


    const handleSearchInput = (e) => {    /* onChange funktsiooni formis info kogumiseks dara state i.  */
        setSearchInput(               /* onChange update ib iga sisse typeitud tähe/sümboliga antud välja objektis */
            { [e.target.name]: e.target.value }
        );

    };
    const closeModal = () => {
        // Close the modal
        setShowModal(false);
        setSearchInput({ name: "" })
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" 
                        type="button" 
                        onClick={() => setShowMenu(prev => !prev)} 
                         aria-expanded={showMenu} 
                        aria-label="Toggle navigation" > 
                        <span className="navbar-toggler-icon"></span> 
                    </button>
                    <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Folders">Folders</Link>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" id="contentDropdown">
                                    Content
                                    <div className="content-dropdown-menu">
                                        {people && people.map((item) => (
                                            <div key={item.id}>
                                                under construction!
                                                {/* <img src={item.picture instanceof File ? URL.createObjectURL(item.picture) : item.picture} alt="Person" /> */}
                                                <p>{item.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Lemmikud">Liked</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="input-group mb-3" style={{ marginTop: "20px" }}>
                        <button className="btn btn-outline-secondary" type="button" onClick={Search}>Searc</button>{/*  AND SEARCH BUTTON HERE */}
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search some item"
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                            id="name"
                            name="name"
                            value={searchInput.name}
                            onChange={handleSearchInput}

                        />{/* //SEARCH INPUT IS HERE */}
                    </div>

                </div>
            </nav >
            <SearcModal show={showModal} onHide={closeModal} searchFilter={searchFilter} />
        </div >

    )
}

export default NavBar
