import axios from 'axios';

const BASEURL = process.env.REACT_APP_BASEURL;
const APIKEY = process.env.REACT_APP_APIKEY;

const search = async (query) =>
  axios.get(`${BASEURL}${query}${APIKEY}&rating=pg`);

export default { search };
