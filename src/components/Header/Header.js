import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="food-header">
            <a href="/home">Home</a>
            <a href="/food">Food</a>
            <a href="/korba">Korba</a>
            <a href="/ribollita">Ribollita</a>
        </div>
    );
};

export default Header;