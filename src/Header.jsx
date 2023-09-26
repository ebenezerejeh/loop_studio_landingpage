import React from 'react'
import navLogo from './assets/images/logo.svg'
import icon_close from './assets/images/icon-close.svg'
import icon_hamburger from './assets/./images/icon-hamburger.svg'

const Header = ({ toggle, openSideBar, closeSideBar }) => {
  return (
    <>
        <div className="Header_container">

                      <div className="nav_container">
                            
                           <div className="logo_container"> <img src={navLogo} className="nav_logo"  alt="navLogo"/></div>
                            
                            <div className="nav_links">
                              <ul>
                                <li className="nav_link_item nav_link_first">About</li>
                                <li className="nav_link_item">Careers</li>
                                <li className="nav_link_item">Events</li>
                                <li className="nav_link_item">Products</li>
                                <li className="nav_link_item">Support</li>
                              </ul>
                            </div>

                            <div className={ toggle ? "sidebar open_sidebar" : "sidebar" }>
                              <img src={navLogo} className="sideBar_logo" alt="navLogo" />
                              <img src={icon_close}  onClick={closeSideBar} className="nav_close" />

                              <ul className="sideBar_link_container">
                                <li className="sideBar_link_item">About</li>
                                <li className="sideBar_link_item">Careers</li>
                                <li className="sideBar_link_item">Events</li>
                                <li className="sideBar_link_item">Products</li>
                                <li className="sideBar_link_item">Support</li>
                              </ul>
                            
                            </div>

                            <img src={icon_hamburger} onClick={openSideBar}  className="nav_ham"/>

                          </div>

                      <div className="textbox_container">
                         <div className="textbox_inner"><p className="header_main_caption">Immersive experiences that deliver</p></div>

                      </div>


              </div>

    
    
    </>
  )
}


export default Header;
