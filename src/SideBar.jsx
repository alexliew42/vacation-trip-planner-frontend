import "./SideBar.css"
import {LogoutLink} from "./LogoutLink.jsx"



export function SideBar() {

  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    // show login/signup
    authenticationLinks = <>
      <a id="login" href="/login">Login</a> 
      <a id="signup" href="/signup">Signup</a>
    </> 
  } else {
    // show logout
    authenticationLinks = <>
    <a id="profile" href="/profile">Profile</a>
    <LogoutLink />
    </>
  }

  
  return (
    <div className="sidebar">
      <div className="logo-background">
        <a href="/trips" className="logo-image">
        </a>
      </div>
      <div id="travel-city">
        <b>
          TravelCity
        </b>
      </div>
      <div className="sidebar-content">
        <a id="new-trip-logo" href="/tripsnew">Plan Trip</a>
        <div className="header-authentication">
          {authenticationLinks}
        </div>
      </div>
    </div>
  );
}

