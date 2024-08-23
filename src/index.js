
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Lemmikud from './Lemmikud';
import reportWebVitals from './reportWebVitals';
import People from './People';
import React, { useState } from 'react';
import Folders from './Folders';


const AppWithPeople = () => {
  const [people, setPeople] = useState(People);
  const [isLiked, setIsLiked] = useState([]);
  const [LikeButtonColor, setLikeButtonColor] = useState(true)
  const [folders, setFolders] = useState([])
  const [buttonColor, setButtonColor] = useState(false)

  const toggleLike = (id) => {
    setPeople(prevPeople => {
      const updatedPeople = prevPeople.map(person =>
        person.id === id ? { ...person, like: !person.like } : person
      );

      setIsLiked(updatedPeople.filter(person => person.like))
      setLikeButtonColor(prev => !prev)

      return updatedPeople;
    });
  };

  const removeFromFavorites = (id) => {
    setPeople(prevPeople => (
      prevPeople.map(person => (
        person.id === id ? { ...person, like: !person.like } : person
      ))
    ))
    setIsLiked(prev => prev.filter(item => item.id !== id)
    )
  }


  const addToFolder = (folderId, personId) => {
    const selectedFolder = folders.find(folder => folder.id === folderId);
    const selectedPerson = people.find(person => person.id === personId);

    const newItem = {
      id: selectedPerson.id,
      phone: selectedPerson.phone,
      img: selectedPerson.picture,
      active: false
    };

    const alreadyIncluded = selectedFolder.image.some(item => item.id === newItem.id);

    const updatedImageArray = alreadyIncluded ? selectedFolder.image.filter(item => item.id !== selectedPerson.id) : [...selectedFolder.image, newItem];

    const updatedFolder = {
      ...selectedFolder,
      image: updatedImageArray,

    };
    const updatedFolders = folders.map(folder => folder.id === folderId ? updatedFolder : folder);
    setFolders(updatedFolders);
    setButtonColor(!buttonColor)

    console.log(folders)

  }
  return (
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App people={people} setPeople={setPeople} isLiked={isLiked}
            setIsLiked={setIsLiked} toggleLike={toggleLike} LikeButtonColor={LikeButtonColor}
            setLikeButtonColor={setLikeButtonColor} folders={folders} setFolders={setFolders} addToFolder={addToFolder}
            buttonColor={buttonColor} />} />
          <Route path="/Folders" element={<Folders folders={folders} setFolders={setFolders} />} />
          <Route path="/Lemmikud" element={<Lemmikud people={people} setPeople={setPeople}
            isLiked={isLiked} removeFromFavorites={removeFromFavorites} />} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  );
}

ReactDOM.render(
  <AppWithPeople />,
  document.getElementById('root')
);

reportWebVitals()