import React, { useEffect, useState } from 'react'
import './About.css'
import bg from './bg.jpg'

function About() {
    
  return (
    <section className='abouthome-section'>
      <div className="abouthome-container">
        <div className="heading">
            <span>About Us</span>
        </div>
        <div className="main-container">
            <div className="left">
                <img src={bg} alt="" />
            </div>
            <div className="right">
                <span>WHY CHOOSE US?</span>
                <h2><span>Meet Shahrukh Aslam:</span> Crafting Bridal Dreams at Rajdhani Bazaar</h2>
                <p>Meet Shahrukh Aslam, the creative genius behind Rajdhani Bazaar. With an unmatched passion for bridal fashion, Shahrukh has sculpted our boutique into a symbol of sophistication and luxury in Delhi. His meticulous attention to detail and signature style ensure that every bride feels like royalty in one of his creations. Welcome to the world of Rajdhani Bazaar, where Shahrukh’s vision meets your bridal dreams.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
