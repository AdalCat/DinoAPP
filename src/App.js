import React, {useState, useEffect} from 'react'
import Navbar from "./components/Navbar";
import Dinos from "./components/Dinos";
import Botonesnav from "./components/Botonesnav";



function App() {
  const [dinos, setdinos] = useState([])
  const [info, setinfo] = useState({})
  const urlInicial = "https://rickandmortyapi.com/api/character"

  const fetchDinos = (url) => {
      fetch(url)
      .then(response => response.json())
      .then(data => {
        setdinos(data.results)
        setinfo(data.info)
      })
      .catch(error => console.log(error))
}

const onPrevious = () => {
  fetchDinos(info.prev)
}

const onNext = () => {
  fetchDinos(info.next)
}

useEffect(() => {
fetchDinos(urlInicial)
}, [])

  return (
    <>
        <Navbar brand="DinoAPP"/>

        <div className="container mt-5">
          <Botonesnav prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
          <Dinos dinos={dinos}/>
          <Botonesnav prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        </div>
    </>
  );
}



export default App;
