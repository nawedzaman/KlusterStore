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
            src="https://ik.imagekit.io/qzwxtlokd/norbert-toth-I1oL89qxefc-unsplash.jpg?updatedAt=1696663253720"
            alt=""
          />
        </div>
      </div>
      <div className="featured">
        <FeaturedBook />
        <button onClick={routeChange}>See More </button>
      </div>
    </div>
  );
};
export default HomePage;
