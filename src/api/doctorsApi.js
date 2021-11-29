import axios from "axios";
const URL = 'http://localhost:3000/';


/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class DoctorsApi {

// get list of doctors

static async getDoctors() {
  const res = await axios.get(`${URL}doctors`);
  return res.data.doctors;
};

}

export default DoctorsApi;