import React from 'react'

const Dinos = ({ dinos = []}) => {
  return (
    <div className='row'>
      {dinos.map((item) => (
        <div key={item.id} className='col mb-5'>
          <div className='card' style={{minWidth: '200px'}}>
            <img src={item.img} alt={item.name}/>
            <div className="card-body">
              <h4 className='card-title'>{item.name}</h4>
              <hr/>
              <p>Habitat: {item.habitatPlace} - {item.habitatSubregion}</p>
              <p>Periodo: {item.historicalperiodName} - {item.historicalperiodYear}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Dinos;