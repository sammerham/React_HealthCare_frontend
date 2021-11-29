import React from 'react'
import Doctor from './Doctor'

function Doctors({ doctors, changeDoctor, resetDoctorDate }) {
  // reset current doctor back to null;

  const handleReset = () => {
    resetDoctorDate();
  };

  return (
    <div>
      <h1>Physicians</h1>
      <ul>
        {doctors.map(doctor => (
          <Doctor doctor={doctor} changeDoctor={changeDoctor}key={doctor.id}/>
        ))}
      </ul>
      <button onClick={handleReset}>Reset</button>
    </div>
    
  )
}

export default Doctors
