//create nav bar
//logo
//title 
//login
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/authors">Authors</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
    </>
    
  );
};

export default Header;
