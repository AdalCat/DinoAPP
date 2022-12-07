import React from 'react'

const Dinos = ({ dinos = []}) => {
  return (
    <div className='row'>
      {dinos.map((item, index) => (
        <div key={index} className='col mb-5'>
          <div className='card' style={{minWidth: "200px"}}>
            <img src={item.image} alt='images'/>
            <dv className="card-body">
              <h4 className='card-title'>{item.name}</h4>
              <hr/>
              <p>Habitat: {item.location.name}</p>
              <p>Periodo: {item.origin.name}</p>
            </dv>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Dinos;