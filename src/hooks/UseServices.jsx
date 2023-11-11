import { useEffect } from "react";
import { useState } from "react";

function UseServices(props) {
const [services, setServices] = useState([])

useEffect(fetch('http://localhost:5000/services'))
.then(res=>res.json())
.then(data=>setServices(data))

return services;

}

export default UseServices;