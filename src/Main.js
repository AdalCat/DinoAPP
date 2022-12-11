import React, {useState, useEffect} from 'react'
import Navbar from "./components/Navbar";
import Dinos from "./components/Dinos";
import { fetchDinos } from './helpers/fetchDinos';

export default function Main() {

    const [dinos, setdinos] = useState([])

    const getDinos = async () => {
        const baseURL = 'https://dinoapi.onrender.com/dinos';
        const dinosaur = await fetchDinos(baseURL);
        setdinos(dinosaur);
      }

      useEffect(() => {
        getDinos()
      }, [])
    return (

        <div>
            <Navbar brand="DinoAPP"/>

            <div className="container mt-5">
            {/* <Botonesnav prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/> */}
            <Dinos dinos={dinos}/>
            {/* <Botonesnav prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/> */}
            </div>

        </div>        
        
    )
}

