import './App.css';
import { Gradient } from './components/Gradient/Gradient';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Gradient></Gradient>
    </div>
  );
}

export default App;
