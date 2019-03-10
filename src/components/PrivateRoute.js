import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import PlatformContext from '../context/PlatformContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const platformContext = useContext(PlatformContext);
  const userLogged = localStorage.getItem('user');
  console.log(userLogged);
  return (
    <Route
      {...rest}
      render={props =>
        userLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
