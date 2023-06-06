/* eslint-disable react/prop-types */
export function CreateTrips(props) {
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target);
    props.onCreateTrip(params, () => event.target.reset())
  }
  
  
  return (
    <div>
      <h1>New Trip</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Trip name: <input name="title" type="text"/>
        </div>
        <div>
          Image URL: <input name="image_url" type="text"/>
        </div>
        <div>
          User ID: <input name="user_id" type="integer"/>
        </div>
        <div>
          Start Time (ex: 05-02-2023 is feb 5th 2023): <input name="start_time" type="text"/>
        </div>
        <div>
          End Time: <input name="end_time" type="text"/>
        </div>
        <input type="submit"/>
      </form>
    </div>
  )
}