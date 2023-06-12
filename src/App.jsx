import { Content } from "./Content"
import { Footer } from "./Footer"
import { SideBar } from "./SideBar"
import {BrowserRouter} from "react-router-dom"

function App() {
  
  return(
    <div>
      <BrowserRouter>
        <SideBar/>
        <Content/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
