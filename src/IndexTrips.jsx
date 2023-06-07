/* eslint-disable react/prop-types */

export function IndexTrips (props) {


  const handleClick = (event) => {
    event.preventDefault()
    console.log(event.target)
    props.onCurrentTrip(event.target)
    window.location.href = "/places"
  }

  return (
    <div>
      <h1>All of your trips</h1>
      {props.trips.map((trip)=> (
        <div key={trip.id} >
          <h1>{trip.title}</h1>
          <h2>{trip.user_id}</h2>
          <p>{trip.start_time}</p>
          <p>{trip.end_time}</p>
          <button onClick={handleClick}>
            {trip.id}
          </button>
        </div>
      ))};
    </div>
  )
}