/* eslint-disable react/prop-types */
import "./IndexTrips.css"

export function IndexTrips (props) {


  const handleClick = (tripId) => {
    window.location.href = `/places?trip_id=${tripId}`
  }


  return (
    <div>
      {console.log(props.trips)}
      <h1>Your Trips <a className="add-a-trip" href="/tripsnew">Add a Trip</a></h1>
      {props.trips.map((trip)=> (
        <div key={trip.id} className="cards">
          <div className="card">
            {console.log(trip.image_url)}
            <img className="card-img-top" src={trip.image_url} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{trip.title}</h5>
              <p className="card-text">Start Date: {trip.start_time}</p>
              <p className="card-text">End Date: {trip.end_time}</p>
              <button className="btn btn-primary" onClick={() => {handleClick(trip.id)}}> Places</button>
            </div>
          </div>
        </div>  
      ))}
    </div>
  )
}
