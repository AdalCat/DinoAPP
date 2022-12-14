import React from 'react'
import './../styles.css'

const Dinos = ({ dinos = []}) => {
  return (
    <div className='row'>
      {dinos.map((item) => (
        <div key={item.id} className='col mb-5'>
          <div className='card' style={{minWidth: '200px'}}>
            <img src={item.img} alt={item.name} className="card-img-top"/>
            <div className="card-body">
              <h4 className='card-title'>{item.name}</h4>
              <hr/>
              <p className='card-text'>Habitat: {item.habitatPlace}-{item.habitatSubregion}</p>
              <p className='card-text'>Periodo: {item.historicalperiodName}-{item.historicalperiodYear}</p>
              <p className='card-text'>Dieta: {item.diet}-{item.diet}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Dinos;