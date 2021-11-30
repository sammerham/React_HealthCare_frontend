import { React, useContext } from 'react';
import AppContext from '../appContext';


function Doctor({ doctor }) {
  
  const { changeDoctor } = useContext(AppContext);

  // chnage current doctor;
  const handleChangeDoctor = () => changeDoctor(doctor);

  
  return (
    doctor.first_name &&
    <li
      onClick={handleChangeDoctor}
      style={{ cursor: 'pointer' }}
    >
      {doctor.last_name}, &nbsp;{doctor.first_name}
    </li>
  )
};

export default Doctor
