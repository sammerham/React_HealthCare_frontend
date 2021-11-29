import { React, useState, useEffect } from 'react';
import DoctorsApi from './api/doctorsApi';
import ApptsApi from './api/apptsApi';
import Doctors from './components/Doctors';
import DoctorInfo from './components/DoctorInfo';
import Appointments from './components/Appointments';
import EditApptForm from './components/EditApptForm';
import AddApptForm from './components/AddApptForm';
import moment from "moment";
// import './App.css';

function App() {
  const [doctors, setDoctors] = useState([]);
  const [currentDoc, setCurrentDoc] = useState(null);
  const [currentAppt, setCurrentAppt] = useState(null);
  const [docAppts, setDocAppts] = useState([]);
  const [cancelCLicked, setCancelClicked] = useState(false);
  const [date, setDate] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isBooking, setIsBooking] = useState(false);


  // side effect to get all the doctors on initial render
  useEffect(() => {
    async function fetchDoctors() {
      const doctorsData = await DoctorsApi.getDoctors();
      setDoctors(doctots => doctorsData);
    }
    fetchDoctors();
  }, []);

  // side effect to get all the appt for doctor on current doc change;
  useEffect(() => {
    async function fetchAppt() {
      if (currentDoc) {
        const apptsData = await ApptsApi.getDocAppt(currentDoc.id);
        setDocAppts(appts => apptsData);
        setCancelClicked(false)
      }
    }
    fetchAppt();
  }, [currentDoc, cancelCLicked, isEditing, isBooking]);
//!*********** RESET DOCTOR AND DATE **********************
  // reset doctor
  const resetDoctorDate = () => {
    setCurrentDoc(null);
    setDate(null);
  };
//!*********** RESET DOCTOR AND DATE **********************
//!*********** DELETE **********************

// handle cancel an appointment
  const handleDeleteAppt = async id => {
     await ApptsApi.cancelDocAppt(id);
     setCancelClicked(true);
  };
//!*********** DELETE **********************

//!*********** DateChange **********************
  // fn to handle change for date input;
  const handleDateChange = e => {
    const { value } = e.target;
    setDate(value);
  };
//!*********** DateChange **********************

//!*********** DoctorChange **********************
// fn to handle change for doctor;
  const changeDoctor = (doctor) => {
    setCurrentDoc(currentDoc => doctor);
    setIsBooking(false);

  };
  //!*********** DoctorChange **********************


  //!***********Filter Appts by DATE and DOCTOR**********************
// filtered appts by date if date exists, otherwise, show all appts for a doctor.
  const filterAppts = (appts, day) => {
    const filteredAppts = date ? docAppts.filter(appt => (moment(appt.appt_date).utc().format('YYYY-MM-DD')) === day) : appts;
    return filteredAppts;
  };
  //!***********Filter Appts by DATE and DOCTOR**********************



  //!*********** EDITTING **********************
  // edit editing to be passed to edit form
  const editAppt = appt => {
    setCurrentAppt(appt)
    setIsEditing(true);
  }
  // cancel editing to be passed to edit form
  const cancelEditing = () => {
    setIsEditing(false);
    setCurrentAppt(null)
  }

  // handle edit an appointment
  const handleEditAppt = async (id, data) => {
    await ApptsApi.updateDocAppt(id, data);
    setIsEditing(false);
  };

  //!*********** EDITTING **********************


  //!*********** Booking **********************
  // edit editing to be passed to edit form
  const bookAppt = () => {
    setIsBooking(true);
  }
  // cancel editing to be passed to edit form
  const cancelbooking = () => {
    setIsBooking(false);
  }
  // handle edit an appointment
  const handleBookAppt = async (data) => {
    await ApptsApi.AddDocAppt(data);
    setIsBooking(false);
  };
  
  
  //!*********** Booking **********************
  return (
    <div className="App-header">
      
      {
        isEditing ?
          <EditApptForm
            currentAppt={currentAppt}
            cancelEditing={cancelEditing}
            handleEditAppt={handleEditAppt}
            currentDoc={currentDoc}
          />
          :
          <>
            <Doctors
              doctors={doctors}
              resetDoctorDate={resetDoctorDate}
              changeDoctor={changeDoctor}
            />
            {isBooking ?
              <AddApptForm
                cancelbooking={cancelbooking}
                currentDoc={currentDoc}
                handleBookAppt={handleBookAppt}
              />
              :
              
              currentDoc &&
              <DoctorInfo currentDoc={currentDoc} handleDateChange={handleDateChange} />
            }
            {currentDoc &&
              <Appointments
                appts={filterAppts(docAppts, date)}
                handleDeleteAppt={handleDeleteAppt}
                handleEditAppt={handleEditAppt}
                currentDoc={currentDoc}
                editAppt={editAppt}
                bookAppt={bookAppt}
              />
            }
        </>
      }
    </div>
  );
}

export default App;
