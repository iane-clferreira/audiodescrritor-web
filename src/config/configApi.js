import axios from "axios";


export default axios.create({
    baseURL: import.meta.env.VITE_API_URL
})
 



//http://192.168.1.9:3000