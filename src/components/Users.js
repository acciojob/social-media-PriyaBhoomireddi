import React, { useState } from 'react';

function Users() {
  const [selectedUser, setSelectedUser] = useState(null);
  const users = ['John Doe', 'Jane Smith'];

  const posts = {
    'John Doe': [{ id: 1, content: 'My first post!' }],
    'Jane Smith': [{ id: 2, content: 'React is awesome!' }],
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index} onClick={() => setSelectedUser(user)}>
            {user}
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div>
          <h2>Posts by {selectedUser}</h2>
          <ul>
            {posts[selectedUser].map((post) => (
              <li key={post.id}>{post.content}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Users;
