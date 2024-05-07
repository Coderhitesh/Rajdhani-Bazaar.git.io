import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="top">
                    <div className="same-col">
                        <h2>Rajdhani Bazaar</h2>
                        <p>Welcome To Rajdhani Bazaar, The Epitome Of Bridal Luxury In Delhi, Curated By The Visionary Shahrukh Aslam. With A Flair For The Extraordinary, Shahrukh’s Name Is Synonymous With Opulence And Innovation.</p>
                    </div>
                    <div className="same-col">
                        <h2>Links</h2>
                        <ul>
                            <li><Link>Home</Link></li>
                            <li><Link>Our Collection</Link></li>
                            <li><Link>Contact Us</Link></li>
                            <li><Link>About Us</Link></li>
                            <li><Link>Book an Appointment</Link></li>
                        </ul>
                    </div>
                    <div className="same-col">
                        <h2>Follow Up</h2>
                        <ul>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">FaceBook</a></li>
                            <li><a href="">Youtube</a></li>
                        </ul>
                    </div>
                    <div className="same-col">
                        <h2>Contact Us</h2>
                        <ul>
                            <li><a href="tel:+919560739633">+919560739633</a></li>
                            <li><a href="mailto:Rajdhanibazaar1@Gmail.Com">Rajdhanibazaar1@Gmail.Com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p>Copyright Rajdhani Bazaar 2024-Created By </p>
            </div>
        </footer>
    )
}

export default Footer
