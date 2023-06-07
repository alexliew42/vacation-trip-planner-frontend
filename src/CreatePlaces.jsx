export function CreatePlaces() {
  return (
    <div>
      <h1>New Place</h1>
      <form>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Url: <input name="url" type="text" />
        </div>
        <div>
          Width: <input name="width" type="text" />
        </div>
        <div>
          Height: <input name="height" type="text" />
        </div>
        <button type="submit">Create photo</button>
      </form>
    </div>
  );
}