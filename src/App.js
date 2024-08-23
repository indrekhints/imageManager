import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { createContext, useState, useContext, useRef } from 'react';
import PeopleComponent from './componenst/PeopleComponent';
import Form from './componenst/form';
import Lemmikud from './Lemmikud';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import People from "./People";
import Context from "./context";
import NavBar from './Nav';

function App({ people, setPeople, toggleLike, LikeButtonColor, folders, setFolders, addToFolder, buttonColor }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [proov, setProov] = useState("proov")
  const [color, setColor] = useState(true)



  const addItem = (newItem) => {
    setPeople(prevPeople => [...prevPeople, newItem]);
  };

  const addEdited = (id, newData) => {
    const newArray = people.map(person =>
      person.id === id ? { ...newData } : person
    );
    setPeople(newArray);
  };

  const Delete = (id) => {
    setPeople(people.filter(person => person.id !== id));
  }
  const Proov = () => {
    console.log("proov")
  }

  return (
    <Context.Provider>
      <div className="App">
        <NavBar people={people} />

        <div className="container">
          {people && (
            <div className="row">
              {people.map((person, index) => (
                <div className="col-md-4" key={index}>
                  <PeopleComponent
                    picture={person.picture}
                    phone={person.phone}
                    education={person.education}
                    name={person.name}
                    id={person.id}
                    addEdited={addEdited}
                    Delete={Delete}
                    toggleLike={toggleLike}
                    like={person.like}
                    folders={folders}
                    setFolders={setFolders}
                    people={people}
                    addToFolder={addToFolder}
                    buttonColor={buttonColor}
                    color={color}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <Form addItem={addItem} people={people} />

      </div>

    </Context.Provider>

  );
}

export default App;
