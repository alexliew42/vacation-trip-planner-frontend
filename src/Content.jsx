import {Routes, Route} from "react-router-dom"
import {Signup} from "./Signup.jsx"
import {Login} from "./Login.jsx"
import {IndexTrips} from "./IndexTrips.jsx"
import {CreateTrips} from "./CreateTrips.jsx"
import {useState, useEffect} from "react"
import axios from "axios"




export function Content() {

  const [trips, setTrips] = useState([]);

  const handleIndexTrips = () => {
    console.log("I am in handleindexTRips")
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    })
  }
  const handleCreateTrip = (params, successCallback) => {
    console.log("I am creating trip")
    axios.post("http://localhost:3000/trips.json", params).then((response) => {
      setTrips([...trips, response.data]);
      successCallback();
    })
  }

  useEffect(handleIndexTrips, []);

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/trips" element={<IndexTrips trips={trips}/>}/>
        <Route path="/tripsnew" element={<CreateTrips onCreateTrip={handleCreateTrip}/>} />
      </Routes>
    </div>
  );
}
