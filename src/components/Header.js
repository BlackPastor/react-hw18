import React, { Component } from 'react';import { Link } from "react-router-dom"

class Header extends Component {
    render() {
        return (
            <div>
                <nav className='header'>
                    <Link to='/' className="navlink">Home</Link>
                    <Link to='/posts' className="navlink">Posts</Link>
                    <Link to='/gallery' className="navlink">Gallery</Link>
                    <Link to='/contacts' className="navlink">Contacts</Link>
                </nav>
            </div>
        );
    }
}

export default Header;