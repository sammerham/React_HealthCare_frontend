import { React, useContext } from 'react';
import AppContext from '../appContext';


function DoctorInfo() {

  const { currentDoc, handleDateChange } = useContext(AppContext);
  const { first_name, last_name } = currentDoc;
  
  return (
    <div>
      <h1>Dr. {first_name} {last_name}</h1>
      <h5>{last_name.toLowerCase()}@notablehealth.com</h5>
      <input
        type="date"
        name="date"
        id="date"
        onChange={handleDateChange}
      />
    </div>
  )
}

export default DoctorInfo
