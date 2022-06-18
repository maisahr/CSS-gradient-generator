import { useEffect, useState } from 'react';
import './App.css';
import { Gradient } from './components/Gradient/Gradient';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  const [colorOne, setColorOne] = useState()
  const [colorTwo, setColorTwo] = useState()

  const handleUpdateOne = (colorOne) => {
    setColorOne(colorOne);
  }

  const handleUpdateTwo = (colorTwo) => {
    setColorTwo(colorTwo);
  }

  return (
    <div className="App">
      <Sidebar 
        handleUpdateOne={handleUpdateOne}
        handleUpdateTwo={handleUpdateTwo}>
      </Sidebar>
      <Gradient 
        colorOne={colorOne}
        colorTwo={colorTwo}>
      </Gradient>
    </div>
  );
}

export default App;
