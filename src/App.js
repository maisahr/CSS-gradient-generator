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
    preposition: 'to ',
    color1: generateRandomColor(),
    color2: generateRandomColor()
  }

  const link = new URLSearchParams(window.location.href);

  console.log(link)

  console.log(link.entries())

  if(window.location.href.includes('?')) {
    console.log('holi')
    const entries = link.entries();

    const result = {}
    for(const [key, value] of entries) {
      result[key.slice(key.indexOf('?')+1)] = value;
    }

    initialValues = {
      ...result,
      preposition: result.style === 'linear' ? 'to ' : 'at '
    }
  }

  console.log(initialValues)
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
