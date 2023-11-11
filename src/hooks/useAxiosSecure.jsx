import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    
  });

function useAxiosSecure(props) {
    return  axiosSecure
    
}

export default useAxiosSecure;