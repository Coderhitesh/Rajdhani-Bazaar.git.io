import React from 'react'
import './Contact.css'
import bg from './bg.webp'

function Contact() {
  return (
    <section className='contact-section'>
      <div className="contact-container">
        <div className="heading">
            <span>Contact Us</span>
        </div>
        <div className="contact-form-row">
            <div className="img">
                <img src={bg} alt="" />
            </div>
            <form action="">
                <div className="form-heading">
                    <span>Get In Touch</span>
                </div>
                <div className="same-field">
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" name='name' />
                </div>
                <div className="same-field">
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" name='email' />
                </div>
                <div className="same-field">
                    <label htmlFor="message">Message:</label>
                    <textarea name='message'></textarea>
                </div>
                <button>Send</button>
            </form>
        </div>
        <div className="adress-row">
            <div className="same-col">
            <i class="ri-phone-fill"></i>
                <div className="detail">
                    <h3>Phone</h3>
                    <a href='tel:+919560739633'>+919560739633</a>
                </div>
            </div>
            <div className="same-col">
            <i class="ri-mail-fill"></i>
                <div className="detail">
                    <h3>E-Mail</h3>
                    <a href='mailto:Rajdhanibazaar1@Gmail.Com'>Rajdhanibazaar1@Gmail.Com</a>
                </div>
            </div>
            <div className="same-col">
            <i class="ri-map-pin-2-fill"></i>
                <div className="detail">
                    <h3>Address</h3>
                    <p>Bala Ji, State Infront Of Omaxe Chowk, 2246/47, Chhippy Wada, Chandni Chowk, Delhi, 110006</p>
                </div>
            </div>
        </div>
      </div>
      <div className="location-parent">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.086916547928!2d77.22921367375373!3d28.657116082967132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1ab1555555%3A0xdf065bb46defc026!2sOMAXE%20CHOWK%20-%20CHANDNI%20CHOWK!5e0!3m2!1sen!2sin!4v1714909195893!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <a href='https://www.google.com/maps/place/OMAXE+CHOWK+-+CHANDNI+CHOWK/@28.6571161,77.2292137,17z/data=!4m10!1m2!2m1!1sBala+Ji,+State+Infront+Of+Omaxe+Chowk,+2246%2F47,+Chhippy+Wada,+Chandni+Chowk,+Delhi,+110006!3m6!1s0x390cfd1ab1555555:0xdf065bb46defc026!8m2!3d28.6571114!4d77.2317886!15sClpCYWxhIEppLCBTdGF0ZSBJbmZyb250IE9mIE9tYXhlIENob3drLCAyMjQ2LzQ3LCBDaGhpcHB5IFdhZGEsIENoYW5kbmkgQ2hvd2ssIERlbGhpLCAxMTAwMDYiA4gBAZIBD3Nob3BwaW5nX2NlbnRlcuABAA!16s%2Fg%2F11fmqq2w_m?entry=ttu' className="location-shadow">

      </a>
      </div>
    </section>
  )
}

export default Contact
