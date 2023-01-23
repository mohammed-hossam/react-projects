import React from 'react';
import { useState } from 'react';
import Children1 from './children1';
import Children2 from './children2';
import Children3 from './children3';
// import MyContext from './context';
import ContextProvider from './contextProvider';
function App() {
  //   const [count, setCount] = useState(0);
  //   console.log(count);
  //   function handleClick() {
  //     setCount((prev) => prev + 1);
  //   }
  return (
    <ContextProvider>
      <div>
        <Children1 />
        <Children2 />
        <Children3 />
      </div>
    </ContextProvider>
    //     <MyContext.Provider value={count}>
    //       <div>
    //         <button onClick={handleClick}>add 1</button>
    //         <Children1 />
    //         <Children2 />
    //       </div>
    //     </MyContext.Provider>
  );
}

export default App;
