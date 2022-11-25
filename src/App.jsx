import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'

const App = () => {
  return (
    <section>
      <Router>
       <Header/>
        <Routes>
          <Route/>
        </Routes>
      </Router>
    </section>
  )
}

export default App
