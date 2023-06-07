/* eslint-disable react/prop-types */
export function IndexPlaces (props) {
  return (
    <div>
      {console.log(props)}
      <h1>All places</h1>
      {props.places.map((place) => (
        <div key={place.id}>
          <p>{place.name}</p>
          <img src={place.image_url} />
          <p>{place.address}</p>
          <p>{place.description}</p>
          <p>{place.start_time}</p>
          <p>{place.end_time}</p>
        </div>
      ))}
    </div>
  )
}