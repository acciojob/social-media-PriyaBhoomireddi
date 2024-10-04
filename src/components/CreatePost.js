import React, { useState } from 'react';

function CreatePost() {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleCreatePost = () => {
    if (author && content) {
      console.log(`New post by ${author}: ${content}`);
    }
  };

  return (
    <div>
      <h1>Create Post</h1>
      <select id="postAuthor" value={author} onChange={(e) => setAuthor(e.target.value)}>
        <option value="">Select Author</option>
        <option value="John Doe">John Doe</option>
        <option value="Jane Smith">Jane Smith</option>
      </select>
      <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
}

export default CreatePost;
