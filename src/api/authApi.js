import axios from "axios";
const URL = 'http://localhost:3001/';



/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class AuthApi {

  // login
  static async login(data) {
    try {
      const res = await axios({
      method: 'post',
      url: `${URL}auth/login`,
      data
    })
    return res.data.token;
    } catch (e) {
      console.log(e.response.data.error.message)
    }
  };
  
  // register a new user 
  static async register(data) {
    try {
      const res = await axios({
        method: 'post',
        url: `${URL}auth/register`,
        data
      })
      console.log(res)
      return res.data;
    } catch (e) {
      // console.log(e.response.data.error.message)
      return(e.response.data.error.message)
    }
  };
}

export default AuthApi;