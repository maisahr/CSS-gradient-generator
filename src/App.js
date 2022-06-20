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

  let initialValues = {
    style: 'linear',
    dir: 'top left',
    dirId: 'arrow1',
    preposition: 'to ',
    color1: generateRandomColor(),
    color2: generateRandomColor()
  }

  if(window.location.href.includes('?')) {
    const link = new URLSearchParams(window.location.href);
    const entries = link.entries();

    for(const [key, value] of entries) {
      initialValues[key.slice(key.indexOf('?')+1)] = value;
    }

    initialValues.preposition = initialValues.style === 'linear' ? 'to ' : 'at '
  }

  const [values, setValues] = useState(initialValues)

  if(values.style === 'linear' && values.dir === 'center') {
    values.dir = 'top left'
    values.dirId = 'arrow1'
  }

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
