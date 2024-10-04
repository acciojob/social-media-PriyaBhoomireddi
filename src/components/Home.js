// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this import is present

function Home() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          <li><Link to="/create-post">Create Post</Link></li>
        </ul>
      </nav>
      {/* Other components or elements */}
    </div>
  );
}

export default Home;
