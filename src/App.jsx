import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Addtech from './components/Addtech'
import Contact from './components/Contact'

function App() {
  

  return (
    <div>
     <Sidenav />
     <Main/>
     <Work/>
     <Projects/>
     <Technologies/>
     <Addtech/>
     <Contact/>

    </div>
  )
}

export default App
