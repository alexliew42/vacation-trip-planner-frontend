/* eslint-disable react/prop-types */
import {useEffect, useState} from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom"
import {CreatePlaces} from "./CreatePlaces.jsx"


export function IndexPlaces (props) {

  const [places, setPlaces] = useState([]);

  const [searchParams] = useSearchParams();

  const handleIndexPlaces = () => { 
    axios.get(`http://localhost:3000/places.json?trip_id=${searchParams.get("trip_id")}`).then((response) => {
      console.log(response.data)
      setPlaces(response.data)
    })
  }

  const handleCreatePlace = (params, successCallback) => {
    console.log("I am creating trip")
    console.log(params)
    axios.post("http://localhost:3000/places.json", params).then((response) => {
      setPlaces([...places, response.data]);
      successCallback();
    })
  }

  useEffect(handleIndexPlaces, [])
  
  return (
    <div className="IndexPlaces">
      {console.log(props)}
      <h1>All places</h1>
      {places.map((place) => (
        <div key={place.id}>
          <p>{place.name}</p>
          <img src={place.image_url} />
          <p>{place.address}</p>
          <p>{place.description}</p>
          <p>{place.start_time}</p>
          <p>{place.end_time}</p>
        </div>
      ))}
      <CreatePlaces onCreatePlace={handleCreatePlace} places={searchParams.get("trip_id")}/>
    </div>
  )
}