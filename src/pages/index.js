import React from "react"
import { Link } from "gatsby"
export default () => (
    <div style={{ color: `purple` }}>
        <Link to="/sakepanda/">Sakepanda</Link>
        <br></br>
        <Link to="/top/">Top</Link>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
)