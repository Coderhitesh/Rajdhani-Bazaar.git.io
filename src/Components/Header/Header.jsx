import React, { useState } from 'react'
import './header.css'
import logo from './logo.jpeg'
import { Link } from 'react-router-dom'

function Header() {
    const [isSearchBarActive,setIsSearchBarActive] = useState(false)
    const [isMobileModeActive,setIsMobileModeActive] = useState(false)

    const SearchBarActive = () => {
        setIsSearchBarActive(!isSearchBarActive)
    }

    const mobileModeActive = () => {
        setIsMobileModeActive(!isMobileModeActive)
    }

    const mobileModeDeActive = () => {
        setIsMobileModeActive(false)
    }

    return (
        <header>
            <div className="header-container">
                <Link to={'/'} className="logo">
                    <img onClick={mobileModeDeActive} src={logo} alt="" />
                </Link>
                <div className={`right ${isMobileModeActive ? 'mobilemodeacive' : ''}`}>
                    <nav>
                        <ul>
                            <li><Link to={'/'} onClick={mobileModeDeActive} href="">Home</Link></li>
                            <li><Link to={'/about'} onClick={mobileModeDeActive} href="">About Us</Link></li>
                            <li><Link to={''} onClick={mobileModeDeActive} href="">Book a Appointment</Link></li>
                            <li><Link to={'/contact'} onClick={mobileModeDeActive} href="">Contact Us</Link></li>
                            <li><Link to={'/collection'} onClick={mobileModeDeActive} href="">Our Collection</Link></li>
                        </ul>
                    </nav>
                    <div className="search">
                        <i onClick={SearchBarActive} class="ri-search-line"></i>
                        <div className={`search-bar ${isSearchBarActive ? 'searchActive' : ''}`}>
                            <input type="text" />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
                <div className="menu" onClick={mobileModeActive}>
                    <i class="ri-menu-line"></i>
                </div>
            </div>
        </header>
    )
}

export default Header
