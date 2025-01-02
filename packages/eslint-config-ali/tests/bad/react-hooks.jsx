import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  if (count < 10) {
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    }, []);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;
