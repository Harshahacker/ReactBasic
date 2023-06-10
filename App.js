
import './App.css';
import Greet from './compon/Greteing';
import Welcome from './compon/classcom';
import Mess from './compon/message';
import Counter from './compon/Counter';
import Parent from './compon/Parent';
function App() {
  return (
    <div className="App">
      <Greet name="harsha"/>
      <Welcome name="Harsha"/>
      <Mess />
      <Counter />
      <Parent/>
    </div>
  );
}


      

export default App;
