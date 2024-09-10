import { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { useEffect } from 'react'
import { logout } from '../../firebase'

const Navbar = () => {

    const navRef = useRef();

    useEffect(() => {
        window.addEventListener('scrool', ()=>{
            if(window.scrollY >= 80) {
                navRef.current.classList.add('nav-dark')
            } else {
                navRef.current.classList.remove('nav-dark')
            }
        })
    },[])

    return (
        <div ref={navRef} className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="logo-netflix" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browser by Languge</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search_icon} alt="icon search" className='icons' />
                <p>Children</p>
                <img src={bell_icon} alt="icon bell" className='icons' />
                <div className="navbar-profile">
                    <img src={profile_img} alt="image profile" className='icons' />
                    <img src={caret_icon} alt="icon caret" />
                    <div className="dropdown">
                        <p onClick={()=>{logout()}}>Sign Out Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar