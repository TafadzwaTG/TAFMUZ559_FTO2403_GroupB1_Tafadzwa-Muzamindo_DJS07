import React from "react"
import Header from "./components/Header.jsx"
import Meme from "./components/Meme.jsx"

//Defining the App component
function App() {

  return (
    // The App component returns a div containing the Header and Meme components
    <div>
      <Header />
     <Meme />
    </div>
  )
}
// Exporting the App component as the default export
export default App
