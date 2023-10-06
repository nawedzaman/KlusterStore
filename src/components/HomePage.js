import React from "react";
import FeaturedBook from "./FeaturedBook";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
const HomePage = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/books`;
    navigate(path);
  };
  return (
    <div className="home-page">
      <div className="welcome">
        <div className="welcome-text">
          <h1>Welcome to our online Bookstore!</h1>
          <h3>
            Welcome to our online bookstore, where you can browse and buy a vast
            array of fiction and non-fiction books in many genres. We believe
            there is a book out there for everyone, and our mission is to help
            you find it. Browse our selection and find your next adventure!
          </h3>
        </div>
        <div className="welcome-img">
          <img
            src="https://images.unsplash.com/photo-1578511161102-485cc0775c6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="featured">
        <FeaturedBook />
        <button onClick={routeChange}>Browse all </button>
      </div>
    </div>
  );
};
export default HomePage;
