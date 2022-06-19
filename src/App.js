import { useState } from 'react';
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

  const initialValues = {
    style: 'linear',
    dir: 'top left',
    preposition: 'to ',
    colorOne: generateRandomColor(),
    colorTwo: generateRandomColor()
  }



  const [values, setValues] = useState(initialValues)

  const handleChange = (newValues) => {
    setValues(newValues)
  }

  return (
    <div className="App">
      <Sidebar values={values} handleChange={handleChange} handleRandom={generateRandomColor}>
      </Sidebar>
      <Gradient values={values}>
      </Gradient>
    </div>
  );
}

export default App;
