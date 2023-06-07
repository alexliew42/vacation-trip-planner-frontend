import {Routes, Route} from "react-router-dom"
import {Signup} from "./Signup.jsx"
import {Login} from "./Login.jsx"
import {IndexTrips} from "./IndexTrips.jsx"
import {CreateTrips} from "./CreateTrips.jsx"
import {IndexPlaces} from "./IndexPlaces.jsx"
import {useState, useEffect} from "react"
import axios from "axios"

export function Content() {

  const [trips, setTrips] = useState([]);
  const [places, setPlaces] = useState([]);
  const [currentTrip, setCurrentTrip] = useState({});

  const handleIndexTrips = () => {
    console.log("I am in handleindextrips")
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    })
  }

  const handleCreateTrip = (params, successCallback) => {
    console.log("I am creating trip")
    console.log(params)
    axios.post("http://localhost:3000/trips.json", params).then((response) => {
      setTrips([...trips, response.data]);
      successCallback();
    })
  }

  
  const handleIndexPlaces = () => { 
    console.log(currentTrip)
    axios.get(`http://localhost:3000/places.json?trip_id=${currentTrip}`).then((response) => {
      console.log(response.data)
      setPlaces(response.data)
    })
  }

  const handleCurrentPlace = (trip) => {
    setCurrentTrip(trip)
    console.log(trip)
  }

  useEffect(handleIndexTrips, []);
  useEffect(handleIndexPlaces, []);


  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/trips" element={<IndexTrips trips={trips} onCurrentTrip={handleCurrentPlace}/>}/>
        <Route path="/tripsnew" element={<CreateTrips onCreateTrip={handleCreateTrip}/>} />
        <Route path="/places" element={<IndexPlaces places={places}/>}/>
      </Routes>
    </div>
  );
}
