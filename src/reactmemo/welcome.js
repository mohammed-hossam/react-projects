import React from 'react';

const List = (props) => {
  console.log('Render: List');
  // console.log(setText('haaaaaaaaaa'));
  return (
    <ul>
      {/* {list.map((item) => (
           <ListItem key={item.id} item={item} />
         ))} */}
      {/* <ListItem key={list.id} item={list} /> */}
    </ul>
  );
};

const mem = React.memo(List);
export default mem;
//
// export default List;
