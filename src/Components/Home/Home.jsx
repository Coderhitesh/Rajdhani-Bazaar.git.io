import React from 'react'
import './footer.css'
import WelcomePage from '../WelcomePage/WelcomePage'
import CollectionHomePage from '../CollectionHomePage/CollectionHomePage'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Counter from '../Counter/Counter'

function Home() {
  return (
    <div>
      <WelcomePage />
      <CollectionHomePage />
      <About />
      <Contact />
      <Counter />
    </div>
  )
}

export default Home
