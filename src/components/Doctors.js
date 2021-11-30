import { React, useContext } from 'react';
import AppContext from '../appContext';
import Doctor from './Doctor'
import Appointments from './Appointments';


function Doctors() {
  const {
    doctors,
    resetDoctorDate,
    currentDoc,
  } = useContext(AppContext);
    
  // reset current doctor back to null;

  const handleReset = () => {
    resetDoctorDate();
  };
  return (
    <div>
      <h1>Physicians</h1>
      <ul>
        {doctors.map(doctor => (
          <Doctor doctor={doctor} key={doctor.id}/>
        ))}
      </ul>
      <button onClick={handleReset}>Reset</button>
      {
        currentDoc
        &&
        <Appointments />
      }
    </div>
  )
}

export default Doctors
