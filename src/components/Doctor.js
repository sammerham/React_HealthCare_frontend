import React from 'react'



//{
// "id": 1,
//   "first_name": "Oliver",
//     "last_name": "Twist"
//     }
function Doctor({ doctor, changeDoctor }) {
  const handleChangeDoctor = () => {
    changeDoctor(doctor);
  }
  
  return (
    doctor.first_name &&
    <li onClick={handleChangeDoctor} style={{ cursor: 'pointer' }}>{doctor.last_name}, &nbsp;{doctor.first_name}</li>
  )
};

export default Doctor
