import React from 'react'
import footer_logo from './assets/images/logo.svg'
import facebook_icon from './assets/images/icon-facebook.svg'
import twitter_icon from './assets/images/icon-twitter.svg'
import pinterest_icon from './assets/images/icon-pinterest.svg'
import instagram_icon from './assets/images/icon-instagram.svg'

const Footer = () => {
  return (
    <>

    <div className="footer">

                              <div className="footer_body">

                                   <div className="footer_nav">

                                    <div className="footer_logo_2_container"><img src={footer_logo} className="footer_logo_2" alt="navLogo" /></div>

                                    <ul>
                                      <li className="footer_link"> About  </li>
                                      <li className="footer_link"> Careers </li>
                                      <li className="footer_link"> Events </li>
                                      <li className="footer_link"> Products </li>
                                      <li className="footer_link"> Support </li>
                                    </ul>

                                   </div>
                                    
                                   <div className="footer_icons">
                                    <ul>
                                    <li className="footer_icon_links"><img src={facebook_icon}  alt="facebook_icon"/></li>
                                    <li className="footer_icon_links"><img src={twitter_icon}  alt="twitter_icon"/></li>
                                    <li className="footer_icon_links"><img src={pinterest_icon}  alt="pinterest_icon"/></li>
                                    <li className="footer_icon_links"><img src={instagram_icon} alt="instagram_icon" /></li>
                                   </ul>


                                    <p> © 2021 Loopstudios. All rights reserved.</p>

                                   </div> 
                                   

                              </div>

                              
                              <div className="attribution">
                                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                                Coded by <a href="#">ebenezer ejeh</a>.
                                </div>

                      </div> 
                        

    
    
    
    
    </>
  )
}

export default Footer