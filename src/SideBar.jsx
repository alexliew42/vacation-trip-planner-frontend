import "./SideBar.css"
import {LogoutLink} from "./LogoutLink.jsx"



export function SideBar() {

  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    // show login/signup
    authenticationLinks = <>
      <a href="/login">Login</a> 
      <a href="/signup">Signup</a>
    </>
  } else {
    // show logout
    authenticationLinks = <LogoutLink />
  }

  
  return (
    <div className="sidebar">
      <div className="logo-background">
        <a href="/trips" className="logo-image">
        </a>
      </div>
      <div className="sidebar-content">
        <a href="/tripsnew">New Trip</a>
        <div className="header-authentication">
          {authenticationLinks}
        </div>
      </div>
    </div>
  );
}

