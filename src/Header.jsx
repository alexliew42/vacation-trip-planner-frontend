import {LogoutLink} from "./LogoutLink.jsx"
export function Header() {

  
  return (
    <div className="topnav">
      <a href="/trips" className="active">Home</a>
      <a href="/signup" className="right">Sign Up</a>
      <a href="/login">Log In</a>
      <LogoutLink/>
      <a href="/tripsnew">New Trip</a>
    </div>
  );
}
