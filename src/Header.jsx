import "./Header.css"

export function Header() {

  
  return (
    <div className="sidebar">
      <a href="/trips" className="active">Home</a>
      <a href="/signup" className="right">Sign Up</a>
      <a href="/login">Log In</a>
      <a href="/logout">Log out</a>
      <a href="/tripsnew">New Trip</a>
    </div>
  );
}
