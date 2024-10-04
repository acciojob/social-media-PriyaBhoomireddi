import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import Notifications from './Notifications';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
import EditPost from './EditPost';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
            <li><Link to="/create-post">Create Post</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
