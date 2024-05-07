import React from 'react'
import './CollectionHomePage.css'
import left from './first.jpg'
import right from './second.jpg'

function CollectionHomePage() {
  return (
    <section className='CollectionHomePage-section'>
      <div className="CollectionHomePage-container">
        <div className="heading">
            <span>OUR COLLECTION</span>
        </div>
        <div className="main-container">
            <div className="left">
                <img src={left} alt="" />
            </div>
            <div className="right">
                <img src={right} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionHomePage
