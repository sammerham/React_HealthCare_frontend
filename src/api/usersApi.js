import axios from "axios";
const URL = 'http://localhost:3001/';


/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class UsersApi {

  // get list of appt for a certain doctor by date
  static async getDocAppt(id) {
    const res = await axios.get(`${URL}appts/doctorId/${id}`);
    return res.data.appts;
  };
  // delete an appts
  static async cancelDocAppt(id) {
    const res = await axios.delete(`${URL}appts/apptId/${id}`);
    //res.data.message;
    return res.data;
  };
  // update an appts
  static async updateDocAppt(id, data) {
    const res = await axios({
      method: 'patch',
      url: `${URL}appts/apptId/${id}`,
      data
    })
  return res.data;
  };


  // Add new appt
  static async AddDocAppt(data) {
    const res = await axios({
      method: 'post',
      url: `${URL}appts/`,
      data
    })
    return res.data;
  };
}

export default UsersApi;