import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import PlatformContext from '../context/PlatformContext';

const LogIn = props => {
  const platformContext = useContext(PlatformContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);

  const usernameHandler = ({ target }) => {
    setUsername(target.value);
  };
  const passwordHandler = ({ target }) => {
    setPassword(target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    const logged = platformContext.logIn({ username, password });
    setLogged(logged);
  };

  return (
    <>
      {logged && <Redirect to="/" />}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={usernameHandler}
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={passwordHandler}
        />
        <input type="submit" value="Submit" />
        <p>am I logged? {platformContext.users[0].logged ? 'yes' : 'no'}</p>
      </form>
    </>
  );
};

export default LogIn;
