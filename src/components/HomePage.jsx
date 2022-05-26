import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => (
  <div className="jumbotron">
    <p>React, Redux, and React Router for responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn More
    </Link>
  </div>
);
