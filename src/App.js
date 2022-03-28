// import userEvent from '@testing-library/user-event';
import { React, useState, useEffect } from 'react';
import DoctorsApi from './api/doctorsApi';
// import ApptsapiApi from './api/apptsApi';
import AuthApi from './api/authApi';
// import Doctors from './components/Doctors';
// import AppContext from './appContext';
import jwt_decode from "jwt-decode"
// import moment from "moment";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [hasLocalToken, setHasLocalToken] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [doctors, setDoctors] = useState([]);
  // const [currentDoc, setCurrentDoc] = useState(null);
  // const [currentAppt, setCurrentAppt] = useState(null);
  // const [docAppts, setDocAppts] = useState([]);
  // const [cancelCLicked, setCancelClicked] = useState(false);
  // const [date, setDate] = useState(null);
  // const [isEditing, setIsEditing] = useState(false);
  // const [isBooking, setIsBooking] = useState(false);
  // useEffect(() => {
  //   async function getToken({ username, password }) {
  //     const t = await AuthApi.login({ username, password });
  //     setToken(oldToken => t);
  //   }
  //   getToken({ username:'samehisaac', password:'samehisaac'})
  // },[])
  
  
  /** set current user and update isLoadingUser if there is a local token */
  useEffect(() => {

  });
  

  console.log('doctors in app --->>', doctors)
  // side effect to get all the doctors on initial render
  // useEffect(() => {
  //   async function fetchDoctors() {
  //     const doctorsData = await DoctorsApi.getDoctors();
  //     setDoctors(doctots => doctorsData);
  //   }
  //   fetchDoctors();
  // }, []);

  // side effect to get all the appt for doctor on current doc change;
  // useEffect(() => {
  //   async function fetchAppt() {
  //     if (currentDoc) {
  //       const apptsData = await ApptsApi.getDocAppt(currentDoc.id);
  //       setDocAppts(appts => apptsData);
  //       setCancelClicked(false)
  //     }
  //   }
  //   fetchAppt();
  // }, [currentDoc, cancelCLicked, isEditing, isBooking]);
//!*********** RESET DOCTOR AND DATE **********************
  // reset doctor
  // const resetDoctorDate = () => {
  //   setCurrentDoc(null);
  //   setDate(null);
  //   setIsBooking(false);
  // };
//!*********** RESET DOCTOR AND DATE **********************
//!*********** DELETE **********************

// handle cancel an appointment
  // const handleDeleteAppt = async id => {
  //    await ApptsApi.cancelDocAppt(id);
  //    setCancelClicked(true);
  // };
//!*********** DELETE **********************

//!*********** DateChange **********************
  // fn to handle change for date input;
  // const handleDateChange = e => {
  //   const { value } = e.target;
  //   setDate(value);
  // };
//!*********** DateChange **********************

//!*********** DoctorChange **********************
// fn to handle change for doctor;
  // const changeDoctor = (doctor) => {
  //   setCurrentDoc(currentDoc => doctor);
  //   setIsBooking(false);

  // };
  //!*********** DoctorChange **********************


  //!***********Filter Appts by DATE and DOCTOR**********************
// filtered appts by date if date exists, otherwise, show all appts for a doctor.
  // const filterAppts = (appts, day) => {
  //   const filteredAppts = date ? docAppts.filter(appt => (moment(appt.appt_date).utc().format('YYYY-MM-DD')) === day) : appts;
  //   return filteredAppts;
  // };
  //!***********Filter Appts by DATE and DOCTOR**********************



  //!*********** EDITTING **********************
  // edit editing to be passed to edit form
  // const editAppt = appt => {
  //   setCurrentAppt(appt)
  //   setIsEditing(true);
  // }
  // cancel editing to be passed to edit form
  // const cancelEditing = () => {
  //   setIsEditing(false);
  //   setCurrentAppt(null)
  // }

  // handle edit an appointment
  // const handleEditAppt = async (id, data) => {
  //   await ApptsApi.updateDocAppt(id, data);
  //   setIsEditing(false);
  // };

  //!*********** EDITTING **********************


  //!*********** Booking **********************
  // // edit editing to be passed to edit form
  // const bookAppt = () => {
  //   setIsBooking(true);
  // }
  // // cancel editing to be passed to edit form
  // const cancelbooking = () => {
  //   setIsBooking(false);
  // }
  // // handle edit an appointment
  // const handleBookAppt = async (data) => {
  //   await ApptsApi.AddDocAppt(data);
  //   setIsBooking(false);
  // };
  
  //!*********** Booking **********************
const data = {
          username: "new5",
          firstName: "first5",
          lastName: "last5",
          password: "password5",
          email: "new5@email.com",
}
  const loginData = { username: 'samehisaac', password: 'samehisaac' };

// handle register
/** Gets auth token from backend on login, sets it on 
* localStorage & updates hasLocalToken */
  
  const handleRegister = async () => {
    const tokenRes = await AuthApi.register(data);
    console.log('tokenres in rgister in app', tokenRes)
      localStorage.setItem("item", tokenRes);
      setHasLocalToken(true)
  };
  
  
  // handle login
  /** Gets auth token from backend on login, sets it on
   * localStorage and updates hasLocalToken */
  const handleLogin = async () => {
    const tokenRes = await AuthApi.login(loginData);
    console.log('token lon in in app', tokenRes)
    setHasLocalToken(true);
    localStorage.setItem("item", tokenRes);
  };

  /** Clears local storage and logs user out */
  async function handleLogout() {
    localStorage.clear();
    setCurrentUser(null);
    setHasLocalToken(false);
  }
  
  
  // handlle get doctors
  const handleDoctors = async () => {
    const doctors = await DoctorsApi.getDoctors(localStorage.getItem('item'));
    console.log('docts in local storage--->>',localStorage.getItem('item' ))
    if(doctors)
    setDoctors(oldToken => doctors.doctors);
  };

  return (
    <div className="App-header">
      {/* <AppContext.Provider value={{
              doctors,
              resetDoctorDate,
              changeDoctor,
              handleDeleteAppt,
              handleEditAppt,
              currentDoc,
              editAppt,
              bookAppt,
              cancelbooking,
              handleBookAppt,
              isBooking,
              handleDateChange,
              currentAppt,
              cancelEditing,
              isEditing,
              filterAppts,
              docAppts,
              date,
      }}> */}
        {/* <Doctors /> */}
      {/* </AppContext.Provider> */}
      <button onClick={handleRegister}>regiser</button>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleDoctors}>Doctors</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
