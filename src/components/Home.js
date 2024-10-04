import React, { useState } from 'react';

function Home() {
  const [posts, setPosts] = useState([
    { id: 1, author: 'John Doe', content: 'My first post!' },
    { id: 2, author: 'Jane Smith', content: 'React is awesome!' },
  ]);

  return (
    <div>
      <h1>Posts</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.author}</h3>
            <p>{post.content}</p>
            <Link to={`/posts/${post.id}`}>View Post</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
