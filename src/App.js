import './css/App.css';
import List from './List.js';
import React, {useState} from 'react';

function App() {
  const[pairs, setPairs] = useState([]);
  return (
    <List pairs={pairs} setPairs={setPairs} />
  );
}

export default App;
