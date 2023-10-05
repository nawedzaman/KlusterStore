import React from 'react';
import FeaturedBook from './FeaturedBook';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/books`;
    navigate(path);
  };
  return (
    <div className="home-page">
      <h1>Welcome to the Bookstore!</h1>
      <h3>Welcome to our online bookstore, where you can browse and buy a vast array of fiction and non-fiction books in many genres. We believe there is a book out there for everyone, and our mission is to help you find it. Browse our selection and find your next adventure!</h3>
      <FeaturedBook />
      <button onClick={routeChange}>Browse all </button>
    </div>
  );
};
export default HomePage;
