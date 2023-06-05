import {LogoutLink} from "./LogoutLink.jsx"
export function Header() {

  
  return (
    <div className="topnav">
      <a href="#home" className="active">Home</a>
      <a href="/signup">Sign Up</a>
      <a href="/login">Log In</a>
      <LogoutLink/>
    </div>
  );
}
