import React, { useContext, useEffect } from 'react';

import Activity from './Activity';
import PlatformContext from '../context/PlatformContext';

const Platform = props => {
  const platformContext = useContext(PlatformContext);

  useEffect(() => {}, []);
  return (
    <>
      <h1>Logged as {platformContext.users[0].name}</h1>
      <Activity />
    </>
  );
};

export default Platform;
