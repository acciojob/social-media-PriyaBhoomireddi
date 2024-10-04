import React from 'react';
import { Link, useParams } from 'react-router-dom';

const posts = [
  { id: 1, author: 'John Doe', content: 'My first post!' },
  { id: 2, author: 'Jane Smith', content: 'React is awesome!' },
];

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <div>
      <h2 id="postTitle">{post.author}</h2>
      <p id="postContent">{post.content}</p>
      <Link to={`/edit-post/${post.id}`} className="button">Edit Post</Link>
    </div>
  );
}

export default PostDetail;
