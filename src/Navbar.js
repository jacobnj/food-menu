import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Indian Eatery</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <a href="/starters">Starters</a>
                <Link to="/maincourse">Main Course</Link>
                <a href="/deserts">Deserts</a>
                <Link to="/contact">Contact us</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
