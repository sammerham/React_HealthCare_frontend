import { React, useState } from 'react'
// import moment from "moment";
function AddApptForm({ cancelbooking, currentDoc, handleBookAppt}) {
  const initialFormData = {
    doctor_First_Name:currentDoc.first_name,
    doctor_Last_Name:currentDoc.last_name,
    patient_first_name:"",
    patient_last_name:"",
    date:"",
    time:"",
    kind:"",
  }
  const [formData, setFormData] = useState(initialFormData);
  // handleChange with form Data
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value,
    }));
  };
  // handleSubmit when form Submits
  const handleSubmit = e => {
    e.preventDefault();
    handleBookAppt(formData);
    // handleEditAppt(formData.id, data);
  };
  // handle cancel update
  const handleCancel = e => {
    cancelbooking();
  };
  
  return (
    <div>
      <h3>Appointment for Dr. {currentDoc.last_name}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="doctor_First_Name">Doctor First Name:</label>
        <input
          type="text"
          name="doctor_First_Name"
          id="doctor_First_Name"
          placeholder={currentDoc.first_name}
          value={formData.doctor_First_Name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="doctor_Last_Name">Doctor First Name:</label>
        <input
          type="text"
          name="doctor_Last_Name"
          id="doctor_Last_Name"
          placeholder={currentDoc.last_name}
          value={formData.doctor_Last_Name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="patient_first_name">Patient First Name:</label>
        <input
          type="text"
          required
          name="patient_first_name"
          id="patient_first_name"
          placeholder={formData.patient_first_name}
          value={formData.patient_first_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="patient_last_name">Patient Last Name:</label>
        <input
          type="text"
          required
          name="patient_last_name"
          id="patient_last_name"
          placeholder={formData.patient_last_name}
          value={formData.patient_last_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="time">Appointment Time:</label>
        <input
          type="time"
          required
          name="time"
          id="time"
          placeholder="Appointment Time"
          value={formData.time}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="date">Appointment Date:</label>
        <input
          type="date"
          required
          name="date"
          id="date"
          placeholder="Appointment Date"
          value={formData.date}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="kind">Appointment Kind:</label>
        <select name="kind" id="kind" required onChange={handleChange}>
          <option value="">Please choose appt Kind</option>
          <option value="New Patient">New Patient</option>
          <option value="Follow-up">Follow-up</option>
        </select>
        <br />
        <button onClick={handleSubmit}>Book</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default AddApptForm
