/* eslint-disable react/prop-types */
export function CreatePlaces(props) {
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target);
    props.onCreatePlace(params, () => event.target.reset())
  }
  
  return (
    <div>
      <h1>New Place</h1>
      {console.log(props.places)}
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          TripId: <input name="trip_id" type="integer" defaultValue={props.places}/>
        </div>
        <div>
          Address: <input name="address" type="text" />
        </div>
        <div>
          image_url: <input name="image_url" type="text" />
        </div>
        <div>
          description: <input name="description" type="text" />
        </div>
        <div>
          start_time: <input name="start_time" type="text" />
        </div>
        <div>
          end_time: <input name="end_time" type="text" />
        </div>
        <button type="submit">Create Place</button>
      </form>
    </div>
  );
}