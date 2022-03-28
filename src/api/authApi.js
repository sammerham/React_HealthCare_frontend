import axios from "axios";
const BASE_URL = 'http://localhost:3001';


/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class AuthApi {

  static token;
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${this.token}` };
    const params = (method === "get")
      ? data
      : {};
    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // login
  // static async login(data) {
  //   try {
  //     const res = await axios({
  //     method: 'post',
  //     url: `${BASE_URL}auth/login`,
  //     data
  //   })
  //   return res.data.token;
  //   } catch (e) {
  //     console.log(e.response.data.error.message)
  //   }
  // };

  static async login(data) {
    const response = await this.request("auth/login", data, "post");
    return response.token;
  }
  
  // register a new user 
  // static async register(data) {
  //   try {
  //     const res = await axios({
  //       method: 'post',
  //       url: `${URL}auth/register`,
  //       data
  //     })
  //     console.log(res)
  //     return res.data;
  //   } catch (e) {
  //     // console.log(e.response.data.error.message)
  //     return(e.response.data.error.message)
  //   }
  // };

 /** Register - post request, return token */

  static async register(data) {
    const response = await this.request("auth/register", data, "post");
    return response.token;
  }  
}

export default AuthApi;