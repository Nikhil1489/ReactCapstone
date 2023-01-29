import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'
import { useState } from "react";


export const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="siteHeader">
                <Link to='/'><img src={logo} alt='Little Lemon' /></Link>
                <nav>
                    <ul className={open ? 'navbar active' : 'navbar'}>
                        <li><Link to='/' className='menu-link'>Home</Link></li>
                        <li><Link to='/about' className='menu-link'>About</Link></li>
                        <li><Link to='/menu' className='menu-link'>Menu</Link></li>
                        <li><Link to='/reservations' className='menu-link'>Reservations</Link></li>
                        <li><Link to='/order' className='menu-link'>Order Online</Link></li>
                        <li><Link to='/login' className='menu-link'>Login</Link></li>
                    </ul>
                </nav>
                {/* <div id='open__close__btn' onClick={() => setOpen(!open)} >
                {open ? "close" : "Menu"}
            </div> */}
            </header>
        </>
    );
}

export default Header;
