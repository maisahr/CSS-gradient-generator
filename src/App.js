import { useEffect, useState } from 'react';
import './App.css';
import { Gradient } from './components/Gradient/Gradient';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {

  const generateRandomColor = () => {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    if(randomColor.length !== 7){
      const missing = 7 - randomColor.length;
      randomColor = randomColor + '0'.repeat(missing);
    }
    return randomColor;
  }

  const [colorOne, setColorOne] = useState(generateRandomColor())
  const [colorTwo, setColorTwo] = useState(generateRandomColor())
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
        colorOne={colorOne}
        colorTwo={colorTwo}
        randomColor={generateRandomColor}
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
