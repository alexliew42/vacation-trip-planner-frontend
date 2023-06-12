/* eslint-disable react/prop-types */
import {useEffect, useState} from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom"
import {CreatePlaces} from "./CreatePlaces.jsx"
import { Map, Marker } from "pigeon-maps"
import "./IndexPlaces.css"


export function IndexPlaces () {

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
      <h1>All places</h1>
      <br/>
      {places.map((place) => (
        <div key={place.id} className="places">
            <div className="place-cards">
              <div className="place-image-text">
                <img className="place-images"src={place.image_url} />
                <div className="place-text">
                  <p>Name: {place.name}</p>
                  <p>Address: {place.address}</p>
                  <p>Description: {place.description}</p>
                  <p>Start Time: {place.start_time.slice(0, 10)}</p>
                  <p>End Time: {place.end_time.slice(0, 10)}</p>
                  <p>{place.lat}</p>
                  <p>{place.long}</p>
                </div>
              </div>
              <div className="map">
                <Map defaultCenter={[place.lat, place.long]} defaultZoom={11}>
                  <Marker anchor={[place.lat, place.long]} />
                </Map>
            </div>
            </div>
        </div>
      ))}
      <CreatePlaces onCreatePlace={handleCreatePlace} places={searchParams.get("trip_id")}/>
    </div>
  )
}