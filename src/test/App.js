// import React from 'react';
// import { useEffect, useState } from 'react';
// import ChildrenComponent from './ChildrenComponent';

// export default function App() {
//   const [vv, setvv] = useState('');
//   //   console.log(vv);

//   useEffect(() => {
//     console.log('222');
//   });
//   return (
//     <div className="App">
//       <input
//         value={vv}
//         onChange={(e) => {
//           setvv(e.target.value);
//         }}
//       />
//       <ChildrenComponent />
//     </div>
//   );
// }

// import React, { Component } from 'react';
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = { vv: '' };
//   }

//   componentDidUpdate() {
//     console.log('222');
//   }
//   render() {
//     console.log(this.state.vv);
//     return (
//       <div className="App">
//         <input
//           value={this.state.vv}
//           onChange={(e) => {
//             this.setState({ vv: e.target.value });
//           }}
//         />
//         <p>{this.state.vv}</p>
//       </div>
//     );
//   }
// }
// The componentDidUpdate method is called after the render method of the component is done executing. That means that it will be called after all children's render methods have finished. (w nfs el kalam fl useEffect tar2ebn mn el kalam ele 3mlo fo2)

import React from 'react';
import { useEffect, useState } from 'react';
import ChildrenComponent from './ChildrenComponent';

export default function App() {
  const [vv, setvv] = useState('');
  //   console.log(vv);
  const memo = () => {
    console.log('hello');
    return 'welcome';
  };
  useEffect(() => {
    console.log('222');
  });
  return (
    <div className="App">
      <input
        value={vv}
        onChange={(e) => {
          setvv(e.target.value);
        }}
      />
      <h2>{memo()}</h2>
      <ChildrenComponent />
    </div>
  );
}

// The biggest functional difference between Vue and React is how they handle updates. Vue uses observables (via JavaScript Proxies or defineProperty) to implement reactivity. In short, it modifies data to track when properties are read or written. This allows for fine-grained dependency tracking; Vue knows which properties have been read so it can rerender and update views only when those properties change. This is smarter than a stock React.memo, which compares equality for all props.
// In comparison, React uses a push update model. Rerenders are triggered by a function call somewhere (state update or reducer dispatch). When a React component updates, it will rerender all its children as well.
// The way I think of Vue's update model is as if all components were wrapped in React.memo and the equality function was a dynamic one that compared only props/state that were used on the last render.
