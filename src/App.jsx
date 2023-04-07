import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, Hero, Tagline, Features, Applications, Faq, Waitlists, Footer } from './components'

import { features  } from "./constants"

function App() {

  return (
    <div>
       <Header />
       <Hero />
       <Tagline />
       <Features {...features[0]} />
       <Features left {...features[1]} />
       <Features {...features[2]} />
       <Applications />
       <Faq />
       <Waitlists />
       <Footer />
    </div>
  )
}

export default App
