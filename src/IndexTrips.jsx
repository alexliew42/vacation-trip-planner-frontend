/* eslint-disable react/prop-types */


export function IndexTrips (props) {
  return (
    <div>
      <h1>All of your trips</h1>
      {props.trips.map((trip)=> (
        <div key={trip.id} >
          <h1>{trip.title}</h1>
          <h2>{trip.user_id}</h2>
          <img src={trip.image_url}/>
          <p>{trip.start_time}</p>
          <p>{trip.end_time}</p>
        </div>
      ))}
    </div>
  )
}