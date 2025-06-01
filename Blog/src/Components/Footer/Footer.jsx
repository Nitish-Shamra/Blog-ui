import React from 'react'
import './Footer.css'
import logo from '../assets/blog_logo.png'
import insta_icon from '../assets/insta_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import youtube_icon from '../assets/youtube_icon.png'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="Blog Logo" />
        <p>Blogger</p>
      </div>
        <div className="footer-social-icon">
          <div className="footer-icon-container">
            <img src={insta_icon} alt="Instagram Icon" />
          </div>
           <div className="footer-icon-container">
            <img src={twitter_icon} alt="Twitter Icon" />
          </div>
           <div className="footer-icon-container">
            <img src={youtube_icon} alt="YouTube Icon" />
          </div>
        </div>
        <div className="footer-copyright">
           <hr />
            <p>© 2023 Blog. All rights reserved.</p>
        </div>
       
    </div>
  )
}

export default Footer
