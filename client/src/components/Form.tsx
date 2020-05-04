// import packages
import React, { useState } from 'react';
import { useIO } from '../contexts/io';
import { Link, useParams } from 'react-router-dom';

// Making the App component
const App = () => {
  const [name, setName] = useState('');
  const { connect } = useIO();
  let { roomId } = useParams();

  return (
    <div>
      <input name="name" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => connect({ name }, roomId)}>Connect</button>
    </div>
  );
};

export default App;
