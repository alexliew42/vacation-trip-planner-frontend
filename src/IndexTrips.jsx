/* eslint-disable react/prop-types */
import "./IndexTrips.css"

export function IndexTrips (props) {
  let authentication;
  if (localStorage.jwt === undefined) {
    authentication = <><p>You must log in or sign up to view your trips</p>
    <a href="/login">Login Here</a> <br/>
    <a href="/signup">Sign up Here</a></>
  } else {
    authentication =  <div>
    <h1>Your Trips</h1>
    <h2><a className="add-a-trip" href="/tripsnew">Plan a Trip</a></h2>
    <div className="travel-city-logo">
    </div>
      {props.trips.map((trip)=> (
      <div key={trip.id} className="cards">
        <div className="card">
          <img className="card-img-top" src={trip.image_url} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{trip.title}</h5>
            <p className="card-text">Start Date: {trip.start_time.slice(0, 10)}</p>
            <p className="card-text">End Date: {trip.end_time.slice(0,10)}</p>
            <button className="card-button" onClick={() => {handleClick(trip.id)}}>Places in {trip.title.charAt(0).toUpperCase()}{trip.title.slice(1)}</button>
          </div>
        </div>
      </div>  
    ))}
  </div>
  }


  const handleClick = (tripId) => {
    window.location.href = `/places?trip_id=${tripId}`
  }


  return (
    <div>
      {authentication}
    </div>
  )
}
