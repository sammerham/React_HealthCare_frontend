import { React, useContext } from 'react'
import Appointment from './Appointment'
import AddApptForm from './AddApptForm';
import EditApptForm from './EditApptForm';
import DoctorInfo from './DoctorInfo';
import AppContext from '../appContext';



function Appointments() {
  
  const {
    currentDoc,
    bookAppt,
    isBooking,
    isEditing,
    filterAppts,
    docAppts,
    date
  } = useContext(AppContext);
  
  const appts = filterAppts(docAppts, date);
  const { first_name, last_name } = currentDoc;

  return (
    
    <div>
      {
        isEditing ?
          <EditApptForm />
        :
        isBooking ?
          <AddApptForm />
          :
          <>
            {
              currentDoc
              &&
              <DoctorInfo />
            }
            <h3>Dr. {first_name} {last_name}'s Appointments:</h3>
            {appts.length ?
              <ul style={{ listStyle: 'none' }}>
                {appts.map(appt =>
                  <Appointment
                    appt={appt}
                    key={appt.id}
                  />
                )}
              </ul>
              :
              <p>No appts booked yet!!</p>
            }

            <button onClick={() => bookAppt()}>Book</button>
          </>
      }
    </div>
  )
}

export default Appointments
