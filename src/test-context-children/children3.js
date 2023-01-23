import React, { useContext } from 'react';
import MyContext from './context';
function Children3() {
  const { test } = useContext(MyContext);
  console.log('render children3');

  return (
    <div>
      <p>{test}</p>
    </div>
  );
}

export default Children3;
