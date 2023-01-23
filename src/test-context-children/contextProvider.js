import React, { useState } from 'react';
import MyContext from './context';

const MyProvider = MyContext.Provider;

function ContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(0);

  return (
    <MyProvider value={{ count, setCount, test, useState }}>
      {children}
    </MyProvider>
  );
}

export default ContextProvider;
