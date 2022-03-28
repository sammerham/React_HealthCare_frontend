import axios from "axios";
const URL = 'http://localhost:3001/';


/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class DoctorsApi {

// get list of doctors
static token;
static async getDoctors(token) {
    try {
      const res = await axios({
        method: 'get',
        url: `${URL}doctors`,
        headers : { Authorization: `Bearer ${token}` }
      })
      // console.log(res)
      return res.data;
    } catch (e) {
      console.log(e.response.data.error.message)
    }
  };
}

export default DoctorsApi;