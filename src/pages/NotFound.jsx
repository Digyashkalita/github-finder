import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <div className="text-8xl font-bold mb-8">Oops</div>
        </div>
        <p className="text-5xl mb-8">404 - Page not found1</p>
        <Link to="/" className="btn btn-primary btn-lg">
          <FaHome className="mr-2">Back to home /</FaHome>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
