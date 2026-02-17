import { useState } from "react"
import Navbar from "./Components/Navbar"
import News from "./Components/News"


const App = () => {
  const [catagory, setCatagory] = useState("general")
  return (
    <div>
      <Navbar setCatagory={setCatagory}/>
      <News catagory={catagory}/>
    </div>
  )
}

export default App
