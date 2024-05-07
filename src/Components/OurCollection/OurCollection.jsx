import React from 'react'
import './OurCollection.css'
import c1 from './c1.jpg'
import c2 from './c2.jpg'
import c3 from './c3.jpg'
import c4 from './c4.jpg'
import c5 from './c5.jpg'
import c6 from './c6.jpg'
import c7 from './c7.jpg'
import c8 from './c8.jpg'
import c9 from './c9.jpg'
import c10 from './c10.jpg'
import c11 from './c11.jpg'
import c12 from './c12.jpg'

function OurCollection() {
  return (
    <section className='OurCollection-section'>
      <div className="OurCollection-container">
        <div className="heading">
            <span>Our Collection</span>
        </div>

        <div className="main-container">
            <div className="img">
                <img src={c1} alt="" />
            </div>
            <div className="img">
                <img src={c2} alt="" />
            </div>
            <div className="img">
                <img src={c3} alt="" />
            </div>
            <div className="img">
                <img src={c4} alt="" />
            </div>
            <div className="img">
                <img src={c5} alt="" />
            </div>
            <div className="img">
                <img src={c6} alt="" />
            </div>
            <div className="img">
                <img src={c7} alt="" />
            </div>
            <div className="img">
                <img src={c8} alt="" />
            </div>
            <div className="img">
                <img src={c9} alt="" />
            </div>
            <div className="img">
                <img src={c10} alt="" />
            </div>
            <div className="img">
                <img src={c11} alt="" />
            </div>
            <div className="img">
                <img src={c12} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default OurCollection
