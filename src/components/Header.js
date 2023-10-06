//create nav bar
//logo
//title 
//login
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  // Get the cart items from Redux store
  const cartItems = useSelector((state) => state.cart);
console.log(cartItems);
  // Calculate the total number of items in the cart
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/authors">Authors</Link></li>
        <li>
          <Link to="/cart">
            Cart <span>{totalItemsInCart}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

