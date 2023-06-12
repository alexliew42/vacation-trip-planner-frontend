/* eslint-disable react/prop-types */
import "./CreateTrips.css"

export function CreateTrips(props) {
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target);
    props.onCreateTrip(params, () => event.target.reset())
    window.location.href = "/trips"
  }

  let user;
  if (props.trips[0] === undefined) {
    user = 1;
  } else {
    user = props.trips[0].user_id
  }

  return (
    <div>
      <h1><b>Plan a New Trip</b></h1>
      <form onSubmit={handleSubmit}>
        <label className="trips-label">Where to?</label>
        <div>
          <input className="trips-input-box" name="title" type="text" placeholder="Enter a Destination: e.g Paris, Miami"/>
        </div>
        <br/>
        <label className="trips-label">User ID</label>
        <div>
          <input className="trips-input-box" name="user_id" type="integer" defaultValue={user} />
        </div>
        <br/>
        <label className="trips-label">Start Time</label>
        <div>
          <input className="trips-input-box" name="start_time" type="date"/>
        </div>
        <br/>
        <label className="trips-label">End Time</label>
        <div>
          <input className="trips-input-box" name="end_time" type="date"/>
        </div>
        <br/>
        <label className="trips-label">Image URL </label>
        <div>
          <input className="trips-input-box" name="image_url" type="text"/>
        </div>
        <input type="submit"/>
      </form>
    </div>
  )
}

