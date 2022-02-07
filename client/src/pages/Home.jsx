import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home page</h1>

      <Link to="/question">
        <button>New quiz</button>
      </Link>
      <Link to="/answer/*">
        <button>Show anwers</button>
      </Link>
    </div>
  );
};

export default Home;
