import {Routes, Route} from "react-router-dom"
import {Signup} from "./Signup.jsx"
import {Login} from "./Login.jsx"



export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}
