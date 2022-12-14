import React, {useState, useEffect} from 'react'
import Navbar from "./components/Navbar";
import Dinos from "./components/Dinos";
import { fetchDinos } from './helpers/fetchDinos';
import Botonesnav from "./components/Botonesnav";
const maxDinosPerPage = 5
export default function Main() {

  const [dinos, setdinos] = useState([])
  const [allDinos, setAllDinos] = useState([])
  //current Dino to check how many to load
  const [dinoIndex,setDinoIndex] =useState(0)
  //current lenght of dinosaurs in the API
  const [dinosaurElementIndex,setDinosaurElementIndex] =useState(0)
 


 // call function to load next Dinos (maxDinosPerPage indicates the number of dinos per screen) 
 const onNext = async () => {
  
  const dinosaur = allDinos
  const lastdino = dinos[dinos.length-1]
  const index = dinosaur.findIndex(element =>{
    return element.id === lastdino.id
  })
  const start = index+1
  const end = start+maxDinosPerPage
  setdinos(dinosaur.slice(start,end))
  setDinoIndex(end);

  
}

 // call function to load previous Dinos (maxDinosPerPage indicates the number of dinos per screen) 
const onPrevious = async () => {
  
  const dinosaur = allDinos
  const lastdino = dinos[0]
  const index = dinosaur.findIndex(element =>{
    return element.id === lastdino.id
  })
  const start = index-maxDinosPerPage
  const end = start+maxDinosPerPage
  setdinos(dinosaur.slice(start,end));
  setDinoIndex(start);

  
}

const getDinos = async () => {
   
  const baseURL = 'https://dinoapi.onrender.com/dinos';
  const dinosaur = await fetchDinos(baseURL);
  setAllDinos(dinosaur)
  setdinos(dinosaur.slice(0,maxDinosPerPage));
  setDinosaurElementIndex(dinosaur.length)
  
}

useEffect(() => {
  getDinos()
  
}, [])

  return (
    <>
        <Navbar brand="DinoAPP"/>

        <div className="container mt-5">
      
          
           <Botonesnav prev={dinoIndex===0 ? false : true} next={dinoIndex>=dinosaurElementIndex? false : true} onPrevious={onPrevious} onNext={onNext}/> 
          <Dinos dinos={dinos}/>
          <Botonesnav prev={dinoIndex===0 ? false : true} next={dinoIndex>=dinosaurElementIndex? false : true} onPrevious={onPrevious} onNext={onNext}/> 
        </div>
    </>
  );
}
