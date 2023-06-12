import { Content } from "./Content"
import { Footer } from "./Footer"
import { SideBar } from "./SideBar"
import { Header } from "./Header.jsx"
import {BrowserRouter} from "react-router-dom"

function App() {
  
  return(
    <div>
      <BrowserRouter>
        <SideBar/>
        <Header/>
        <Content/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
