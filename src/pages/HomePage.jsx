import React from 'react';
import Counter from '../components/Counter';
import Posts from '../components/Posts';
import Todos from '../components/Todos';
import Users from '../components/Users';
import UsersHolderCom from '../components/UsersHolderCom';

const HomePage = () => {
  return (
    <main>
      <section>
        <h1>Home</h1>
      </section>
      <section>
        <h2>Counter</h2>
        <Counter />
      </section>
      <section>
        <h2>Todos</h2>
        <Todos />
      </section>
      <section>
        <h2>Posts</h2>
        <Posts />
      </section>
      <section>
        <h2>Users</h2>
        <Users />
      </section>
      <section>
        <h2>Testingas pages</h2>
        <UsersHolderCom />
      </section>
    </main>
  );
};

export default HomePage;
