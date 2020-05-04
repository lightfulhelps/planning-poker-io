// // import packages
// import React, { useEffect, useState } from 'react';
// import socketIOClient from 'socket.io-client';

// // Making the App component
// const App = () => {
//   const [endpoint, setEndpoint] = useState('localhost:5000');
//   const [name, setName] = useState('');

//   // sending sockets
//   const connect = () => {
//     const socket = socketIOClient(endpoint);
//     socket.emit('change color', color); // change 'red' to this.state.color
//   };

//   useEffect(() => {
//     const socket = socketIOClient(endpoint);
//     setInterval(() => send(), 1000);
//     socket.on('change color', (col) => {
//       document.body.style.backgroundColor = col;
//     });
//   }, []);

//   return (
//     <div>
//       <input name="name" onChange={() => setName(this.value)} />
//       <button onClick={connect}>Connect</button>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import Form from './components/Form';
import { IOProvider, useIO } from './contexts/io';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routing/routes';

const App: React.FC = () => {
  return (
    <Router>
      <IOProvider>
        <Routes></Routes>
      </IOProvider>
    </Router>
  );
};

export default App;
