import React, { useContext } from 'react';
import MyContext from './context';
function Children1() {
  const { setCount } = useContext(MyContext);
  console.log('render children1');
  //     console.log(count);
  function handleClick() {
    setCount((prev) => prev + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>add 1</button>
      <p>children1</p>
      {/* <p>{count}</p> */}
    </div>
  );
}

export default Children1;
