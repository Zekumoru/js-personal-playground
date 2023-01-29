import React, { useEffect, useState } from 'react';

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('rendered');
    return setItems(getItems());
  }, [getItems]); // Whenever getItems changes, this effect is called

  return (
    <ul>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </ul>
  );
}

export default List;
