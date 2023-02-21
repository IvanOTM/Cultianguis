
import axios from 'axios';



const cultianguisApi = axios.create({
    baseURL: '/api'
});


export default cultianguisApi;
