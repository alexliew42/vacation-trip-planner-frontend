/* eslint-disable react/prop-types */
import {useEffect, useState} from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom"
import {CreatePlaces} from "./CreatePlaces.jsx"
import { Map, Marker } from "pigeon-maps"
import "./IndexPlaces.css"
import {Modal} from "./Modal.jsx"


export function IndexPlaces () {

  const [places, setPlaces] = useState([]);

  const [searchParams] = useSearchParams();

  const [isPlacesCreateVisible, setIsPlacesCreateVisible] = useState(false);

  const handleShowCreatePlace = () => {
    setIsPlacesCreateVisible(true)
  }
  const handleClose = () => {
    setIsPlacesCreateVisible(false)
  }

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
    setIsPlacesCreateVisible(false);
  }

  useEffect(handleIndexPlaces, [])
  
  return (
    <div className="IndexPlaces">
      <h1>All places</h1>
      <button onClick={handleShowCreatePlace}>
        Add a new Place
      </button>
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
                </div>
                <hr/>
                
              </div>
              <div className="map">
                <Map defaultCenter={[place.lat, place.long]} defaultZoom={11}>
                  <Marker anchor={[place.lat, place.long]} />
                </Map>
            </div>
            </div>
        </div>
      ))}
      <Modal show={isPlacesCreateVisible} onClose={handleClose}>
        <CreatePlaces onCreatePlace={handleCreatePlace} places={searchParams.get("trip_id")}/>
      </Modal>
    
    </div>
  )
}