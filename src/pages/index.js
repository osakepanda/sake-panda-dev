import React from "react";
import { Link } from "gatsby";
//import "./index.css";
const IndexPage = () => (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
);

export default IndexPage;