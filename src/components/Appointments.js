import React from 'react'
import Appointment from './Appointment'
import AddApptForm from './AddApptForm';
import EditApptForm from './EditApptForm';
import DoctorInfo from './DoctorInfo';

function Appointments({
  appts,
  handleDeleteAppt,
  currentDoc,
  editAppt,
  bookAppt,
  cancelbooking,
  handleBookAppt,
  isBooking,
  handleDateChange,
  currentAppt,
  cancelEditing,
  handleEditAppt,
  isEditing
}) {
  const { first_name, last_name } = currentDoc;
  return (
    
    <div>

      {
        isEditing ?
          <EditApptForm
            currentAppt={currentAppt}
            cancelEditing={cancelEditing}
            handleEditAppt={handleEditAppt}
            currentDoc={currentDoc}
          />
        :
        isBooking ?
          <AddApptForm
            cancelbooking={cancelbooking}
            currentDoc={currentDoc}
            handleBookAppt={handleBookAppt}
          />
          :
          <>
            {
              currentDoc
              &&
              <DoctorInfo currentDoc={currentDoc} handleDateChange={handleDateChange} />
            }
            <h3>Dr. {first_name} {last_name}'s Appointments:</h3>
            {appts.length ?
              <ul style={{ listStyle: 'none' }}>
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

            <button onClick={() => bookAppt()}>Book</button>
          </>
      }
      
    </div>
  )
}

export default Appointments
