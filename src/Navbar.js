import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Indian Eatery</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/starters">Starters</a>
                <a href="/maincourse">Main Course</a>
                <a href="/deserts">Deserts</a>
            </div>
        </nav>
    );
}
 
export default Navbar;
