import './App.css';
import Person from './components/Person';

function App() {

  const nome = "Léozin";

  return (
    <div className="App">
      <Person
      name="Rodrigo"
      age="20"
      job="Developer"
      picture="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
