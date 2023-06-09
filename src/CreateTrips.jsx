/* eslint-disable react/prop-types */


export function CreateTrips(props) {
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target);
    props.onCreateTrip(params, () => event.target.reset())
  }

  return (
    <div>
      <h1>Build Your Customized Trip Plan</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Trip name: <input name="title" type="text"/>
        </div>
        <br/>
        <div>
          User ID: <input name="user_id" type="integer" defaultValue="1"/>
        </div>
        <br/>
        <div>
          Start Time: <input name="start_time" type="date"/>
        </div>
        <br/>
        <div>
          End Time: <input name="end_time" type="date"/>
        </div>
        <br/>
        <div>
          Image URL: <input name="image_url" type="text"/>
        </div>
        <input type="submit"/>
      </form>
    </div>
  )
}

