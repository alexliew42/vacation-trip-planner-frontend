import "./Header.css"

export function Header() {

  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    // show login/signup
    authenticationLinks = <>
      <a href="/login">Login</a> 
      <a href="/signup">Signup</a>
    </>
  } else {
    // show logout
    authenticationLinks = <a href="/logout">Logout</a>
  }

  
  return (
    <div className="sidebar">
      <a href="/trips" className="active">Home</a>
      <a href="/tripsnew">New Trip</a>
      <div className="header-authentication">
        {authenticationLinks}
      </div>
    </div>
  );
}

