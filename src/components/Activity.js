import React, { useContext } from 'react';

import PlatformContext from '../context/PlatformContext';
const Activity = () => {
  const platformContext = useContext(PlatformContext);
  return <div>Esto es una actividad para {platformContext.users[0].name}</div>;
};

export default Activity;
