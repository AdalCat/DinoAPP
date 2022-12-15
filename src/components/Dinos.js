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
              <h4 className='card-title' title={item.name}>{item.name}</h4>
              <hr/>
              <p className='card-text'>
                <strong>Habitat:</strong> {item.habitatPlace}-{item.habitatSubregion} <br/>
              </p>
              <p className='card-text'>
                <strong>Periodo:</strong> {item.historicalperiodName}-{item.historicalperiodYear}<br/>
              </p>
              <p className='card-text'>
                <strong>Dieta:</strong> {item.diet}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Dinos;