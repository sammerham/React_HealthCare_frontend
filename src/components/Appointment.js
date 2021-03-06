import { React, useContext } from 'react';
import AppContext from '../appContext';
import moment from "moment";


function Appointment({ appt }) {

  const { handleDeleteAppt, editAppt } = useContext(AppContext);
  
  return (
    <div>
      <li>
        <p><b>Patient Name:</b> {appt.patient_first_name} {appt.patient_last_name}</p>
        <p><b>Appointment Time:</b> {appt.appt_time}</p>
        <p><b>Appointment Date:</b> {moment(appt.appt_date).utc().format('MM-DD-YYYY')}</p>
        <p><b>Appointment Kind:</b> {appt.kind}</p>
        <button onClick={() => handleDeleteAppt(appt.id)}>Cancel Appt</button>&nbsp;&nbsp;
        <button onClick={() => editAppt(appt)}>Update Appt</button>

      </li>
    </div>
  )
}

export default Appointment

