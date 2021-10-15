import React from 'react';
import '../index.css';

const UsersCom = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='users-list-group'>
      {users.map((user) => (
        <li key={user.id} className='users-list-item'>
          <p className='user'>
            {user.id} {user.name}
          </p>
          {console.log('user.length', users.length)}
        </li>
      ))}
    </ul>
  );
};

export default UsersCom;
