import React from "react";
import { Link } from "gatsby";
//import "./index.css";
const TopPage = () => (
    <div style={{ color: `purple` }}>
      <Link to="/sakepanda/">Contact</Link>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
);

export default TopPage;