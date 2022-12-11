import React, {useState, useEffect} from 'react'
import { fetchDinos } from './helpers/fetchDinos';
import Main from './Main';
import AboutApi from './AboutApi';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
// import Botonesnav from "./components/Botonesnav";

function App() {
  //const [dinos, setdinos] = useState([])
  // const [info, setinfo] = useState({})

// const onPrevious = () => {
//   fetchDinos(info.prev)
// }

// const onNext = () => {
//   fetchDinos(info.next)
// }

/* const getDinos = async () => {
  const baseURL = 'https://dinoapi.onrender.com/dinos';
  const dinosaur = await fetchDinos(baseURL);
  setdinos(dinosaur);
}

useEffect(() => {
  getDinos()
}, []) */

  return (
    <Router>  
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="aboutapi" element={<AboutApi/>}/>
      </Routes>
    </Router>
  );
}

export default App;