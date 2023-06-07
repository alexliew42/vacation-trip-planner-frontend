/* eslint-disable react/prop-types */
import {Calendar} from "react-calendar"
import {useState} from "react"

export function IndexTrips (props) {


  const handleClick = (tripId) => {
    window.location.href = `/places?trip_id=${tripId}`
  }

  const [value, onChange] = useState(new Date());

  return (
    <div>
      <h1>All of your trips</h1>
      {console.log(value)}
      {props.trips.map((trip)=> (
        <div key={trip.id} >
          <h1>{trip.title}</h1>
          <h2>{trip.user_id}</h2>
          <p>{trip.start_time}</p>
          <p>{trip.end_time}</p>
          <button onClick={() => {handleClick(trip.id)}}> Places
          </button>
        </div>
      ))};
      <Calendar onChange={onChange} value={value}/>
    </div>
  )
}