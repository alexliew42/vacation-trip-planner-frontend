import {Routes, Route} from "react-router-dom"
import {Signup} from "./Signup.jsx"


export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup/>} />

      </Routes>
    </div>
  );
}
