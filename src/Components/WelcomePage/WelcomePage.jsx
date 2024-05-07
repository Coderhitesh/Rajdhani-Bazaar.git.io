import React from 'react'
import './WelcomePage.css'
import bg from './bg.jpg'

function WelcomePage() {
  return (
    <section className='welcomepage-section'>
      <div className="welcome-container">
        <div className="left">
            <h1>Welcome to Rajdhani World Bazaar</h1>
            <p>Welcome to Rajdhani Bazaar, the epitome of bridal luxury in Delhi, curated by the visionary Shahrukh Aslam. With a flair for the extraordinary, Shahrukh’s name is synonymous with opulence and innovation.</p>
            <p>Step into our world where each creation reflects Shahrukh’s larger-than-life vision, blending grace and elegance effortlessly. At Rajdhani Bazaar, every bridal ensemble is a masterpiece, designed to make you feel like royalty on your special day.</p>
            <p>Indulge in the magic of Shahrukh Aslam’s creations at Rajdhani Bazaar, where dreams are woven into reality and every bride shines with unparalleled radiance.</p>
            <a href="">Book An Appointment</a>
        </div>
        <div className="right">
            <img src={bg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default WelcomePage
