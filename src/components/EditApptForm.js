import { React, useState } from 'react'
import moment from "moment";
function EditApptForm({ currentAppt, currentDoc, cancelEditing, handleEditAppt }) {
  const [formData, setFormData] = useState(currentAppt);

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
    const data = {
      time: formData.appt_time,
      date: formData.appt_date,
    };
    e.preventDefault();
    handleEditAppt(formData.id, data);
  };
// handle cancel update
  const handleCancel = e => {
    cancelEditing();
  };
 
  return (
    <div>
      <h3>Update appointment for Dr. {currentDoc.last_name}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="patient_first_name">Patient First Name:</label>
        <input
          type="text"
          name="patient_first_name"
          id="patient_first_name"
          placeholder={currentAppt.patient_first_name}
          value={formData.patient_first_name}
          onChange={handleChange}
        />
        <label htmlFor="patient_last_name">Patient Last Name:</label>
        <input
          type="text"
          name="patient_last_name"
          id="patient_last_name"
          placeholder={currentAppt.patient_last_name}
          value={formData.patient_last_name}
          onChange={handleChange}
        />
        <label htmlFor="appt_time">Appointment Time:</label>
        <input
          type="time"
          name="appt_time"
          id="appt_time"
          placeholder={currentAppt.appt_time}
          value={formData.appt_time}
          onChange={handleChange}
        />
        <label htmlFor="appt_date">Appointment Date:</label>
        <input
          type="date"
          name="appt_date"
          id="appt_date"
          placeholder={moment(currentAppt.appt_date).utc().format('YYYY-MM-DD')}
          value={moment(formData.appt_date).utc().format('YYYY-MM-DD')}
          onChange={handleChange}
        />
        <label htmlFor="kind">Appointment Kind:</label>
        <input
          type="text"
          name="kind"
          id="kind"
          placeholder={currentAppt.kind}
          value={formData.kind}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Update</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default EditApptForm
