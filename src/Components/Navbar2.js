import React from 'react';
import { Link } from 'react-router-dom';
import { Menubar } from './Menubar';
import './Navbar2.css';

const Navbar2 = () => {
    return (
        <nav>
            {Menubar.map((item, index) => {
                return (
                    <div className="menu-bar">
                        <ul className="menu-items">
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        </ul>
                    </div>    
                );
            })}
        </nav>
    );
}

export default Navbar2;
