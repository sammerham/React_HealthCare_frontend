import React from 'react'
import Appointment from './Appointment'
// import ApptsApi from '../api/apptsApi';

function Appointments({ appts, handleDeleteAppt, currentDoc, editAppt}) {
  console.log(appts)

  const { first_name, last_name } = currentDoc;
  return (
    <div>
      <h3>Dr. {first_name} {last_name}'s Appointments:</h3>
      {appts.length ?
      <ul>
        {appts.map(appt =>
          <Appointment
            appt={appt}
            key={appt.id}
            handleDeleteAppt={handleDeleteAppt}
            editAppt={editAppt}
          />
        )}
        </ul> 
        :
        <p>No appts booked yet!!</p>
      }
      
      <button>Book</button>
    </div>
  )
}

export default Appointments