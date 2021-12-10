import { Axios } from 'axios';
const axios: Axios = require('axios').default;

export class HttpFunc {
  public static get() {
    axios.get("https://reheene6.herokuapp.com/api/property/type/0")
      .then(r => {
      console.log(r);
    });
  }

  
}