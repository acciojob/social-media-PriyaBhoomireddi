import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const posts = [
  { id: 1, author: 'John Doe', content: 'My first post!' },
  { id: 2, author: 'Jane Smith', content: 'React is awesome!' },
];

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id === parseInt(id));
  const [content, setContent] = useState(post.content);

  const handleEditPost = () => {
    // Simulate updating the post
    console.log(`Post ${id} updated to: ${content}`);
    navigate(`/posts/${id}`);
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <button onClick={handleEditPost} className="button">Save</button>
    </div>
  );
}

export default EditPost;
