//dr Name first last
// email
// calender input for date


import React from 'react'

function DoctorInfo({ currentDoc, handleDateChange }) {
  const { first_name, last_name } = currentDoc;
  return (
    <div>
      <h1>Dr. {first_name} {last_name}</h1>
      <h5>{last_name}@notablehealth.com</h5>
      <input
        type="date"
        name="date"
        id="date"
        // placeholder="Search by name"
        // value={date}
        onChange={handleDateChange}
      />
    </div>
  )
}

export default DoctorInfo
