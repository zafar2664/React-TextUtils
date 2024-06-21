import React from 'react'
import NavBar from './NavBar'
import "./App.css"
import TextUtils from './TextUtils'
import Footer from './Footer'
import Context from './Context'


function App() {
  return (
    <>
        <Context>
     <NavBar />
     <TextUtils />
     <Footer/>
     </Context>
    </>
  )
}

export default App