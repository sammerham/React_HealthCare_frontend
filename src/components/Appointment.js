//name, time, kind, cancel, add
//patient_first_name. patient_last_name - kind, appt_time
import React from 'react'
import moment from "moment";
// import ApptsApi from '../api/apptsApi';

function Appointment({ appt, handleDeleteAppt, editAppt }) {

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

