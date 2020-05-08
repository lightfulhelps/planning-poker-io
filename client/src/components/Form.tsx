// import packages
import React, { useState } from 'react';
import { useIO } from '../contexts/io';
import { Link, useParams } from 'react-router-dom';
import { Button, Card } from '../styles/components';

// Making the App component
const App = () => {
  const [name, setName] = useState('');
  const { connect } = useIO();
  let { roomId } = useParams();

  return (
    <Card>
      <input name="name" onChange={(e) => setName(e.target.value)} />
      <Button icon="user" onClick={() => connect({ name }, roomId)}>
        Connect
      </Button>
    </Card>
  );
};

export default App;
