import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles.css';

import Insendi from './components/Insendi.js';
import PlatformContext from './context/PlatformContext';

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Cristo',
      username: 'cristo',
      password: 'test',
      logged: false,
      avatarUrl: 'https://randomuser.me/api/portraits/men/65.jpg'
    },
    {
      id: 2,
      name: 'Elisa',
      username: 'elisa',
      password: 'italia',
      logged: false,
      avatarUrl: 'https://randomuser.me/api/portraits/men/65.jpg'
    }
  ]);

  const logIn = ({ username, password }) => {
    let [user] = users.filter(
      user => user.username === username && user.password === password
    );
    if (user) {
      const newUsers = users.reduce((prev, next) => {
        if (next.username === username && next.password === password) {
          user = { ...next, logged: true };
          prev.push(user);
          return prev;
        }
        prev.push(next);
        return prev;
      }, []);
      localStorage.setItem('user', JSON.stringify(user));
      setUsers(newUsers);
      return true;
    } else {
      console.log('Wrong password or usernmae');
    }
  };
  const logOut = ({ username, password }) => {
    const user = users.filter(
      user => user.username === username && user.password === password
    );
    const userLogged = { ...user, logged: false };
    if (user) {
      setUsers(...users, userLogged);
    }
  };

  return (
    <PlatformContext.Provider value={{ users, logIn, logOut }}>
      <BrowserRouter>
        <Insendi />
      </BrowserRouter>
    </PlatformContext.Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
