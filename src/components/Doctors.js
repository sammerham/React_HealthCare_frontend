import React from 'react'
import Doctor from './Doctor'

function Doctors({ doctors, changeDoctor}) {
  return (
    <div>
      <h4>Physicians</h4>
      <ul>
        {doctors.map(doctor => (
          <Doctor doctor={doctor} changeDoctor={changeDoctor}key={doctor.id}/>
        ))}
      </ul>
    </div>
    
  )
}

export default Doctors
