/* eslint-disable react/prop-types */
import "./CreatePlaces.css"

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
          Trip ID: <input name="trip_id" type="integer" defaultValue={props.places}/>
        </div>
        <div>
          Address: <input name="address" type="text" />
        </div>
        <div>
          Image URL: <input name="image_url" type="text" />            
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          From: <input name="start_time" type="date" />
        </div>
        <div>
          To: <input name="end_time" type="date" />
        </div>
        <button type="submit">Create Place</button>
      </form>
    </div>
  );
}