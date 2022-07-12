import { useState } from 'react';
import './App.css';
import { generateRandomColor } from './utils/randomColor';
import { Gradient } from './components/Gradient/Gradient';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Templates } from './components/Templates/Templates';

function App() {

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

  const [updateTemplates, setUpdateTemplates] = useState(0);

  return (
    <div className="App">
      <Sidebar values={values} 
        handleChange={handleChange}  
        updateTemplates={() => setUpdateTemplates(updateTemplates + 1)}
      />
      <main>
        <section className="gradient">
          <Gradient values={values} selector={'.gradient'}/>
          <h2 className='scroll'>Scroll for saved templates &#8595;</h2>
        </section>
        <Templates updateTemplates={updateTemplates} 
          handleChange={handleChange}
        />
      </main>
    </div>
  );
}

export default App;
