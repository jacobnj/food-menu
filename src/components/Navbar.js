import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className='link-item'>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact us</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
