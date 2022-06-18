import { useEffect, useState } from 'react';
import './App.css';
import { Gradient } from './components/Gradient/Gradient';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  const [colorOne, setColorOne] = useState()
  const [colorTwo, setColorTwo] = useState()
  const [direction, setDirection] = useState({style: 'linear', direction:'to top left'})

  const handleUpdateOne = (colorOne) => {
    setColorOne(colorOne);
  }

  const handleUpdateTwo = (colorTwo) => {
    setColorTwo(colorTwo);
  }

  const handleUpdateDirection = (direction) => {
    setDirection(direction);
  }

  return (
    <div className="App">
      <Sidebar 
        handleUpdateOne={handleUpdateOne}
        handleUpdateTwo={handleUpdateTwo}
        handleUpdateDirection={handleUpdateDirection}
        direction={direction}>
      </Sidebar>
      <Gradient 
        colorOne={colorOne}
        colorTwo={colorTwo}
        direction={direction}>
      </Gradient>
    </div>
  );
}

export default App;
