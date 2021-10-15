import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import displayUsers from '../redux/actions/userActions';

const Users = () => {
  // Hooks
  // - - - local state
  const [usersMaxCount, setUsersMaxCount] = useState([]);
  // -- state
  const usersData = useSelector((state) => state.users);
  // extra state for manage count

  const { users, loading, error } = usersData;

  const dispatch = useDispatch();
  // -- side effects

  useEffect(() => {
    dispatch(displayUsers());
  }, [dispatch]);
  //////////CUSTOM FUNCTIONS////////////////
  const showUsers = (num) => {
    if (usersMaxCount.length > num || usersMaxCount.length === 0) {
      setUsersMaxCount(users.slice(0, num));
    } else {
      setUsersMaxCount([]);
    }
  };

  return (
    <div>
      <button onClick={() => showUsers(5)}>+5</button>
      <button onClick={() => showUsers(10)}>+10</button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        usersMaxCount.map((user) => (
          <ul key={user.id}>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </ul>
        ))
      )}
    </div>
  );
};

export default Users;
