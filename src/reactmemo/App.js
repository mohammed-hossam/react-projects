import React, { useState } from 'react';

import List from './welcome';
//lw passat nfs el ref mn 8er memo hy3ml render b memo hymn3 el rerender, bs lw passat ref mo5tlf hy3mlr erender fl 7altan
const test = { id: 'a', name: 'Robin' };
const App = () => {
  console.log('Render: App');

  const [users, setUsers] = useState(test);

  const [text, setText] = useState('');

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleAddUser = () => {
    setUsers({ id: 'a', name: 'Robin' });
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>

      <List setUsers={setUsers} />
    </div>
  );
};
export default App;
