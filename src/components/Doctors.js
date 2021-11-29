import React from 'react'
import Doctor from './Doctor'
import Appointments from './Appointments';

function Doctors({
  doctors,
  changeDoctor,
  resetDoctorDate,
  filterAppts,
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
  isEditing,
  docAppts,
  date
}) {
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
      {
        currentDoc
        &&
        <Appointments
          appts={filterAppts(docAppts, date)}
          handleDeleteAppt={handleDeleteAppt}
          handleEditAppt={handleEditAppt}
          currentDoc={currentDoc}
          editAppt={editAppt}
          bookAppt={bookAppt}
          cancelbooking={cancelbooking}
          handleBookAppt={handleBookAppt}
          isBooking={isBooking}
          handleDateChange={handleDateChange}
          currentAppt={currentAppt}
          cancelEditing={cancelEditing}
          isEditing={isEditing}
        />
      }
    </div>
    
  )
}

export default Doctors
