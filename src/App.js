import './App.css';
import Person from './components/Person';
import List from './components/List'

function App() {

  const name = "Cleitin";
  const age = "100";
  const job = "Fazedor de programas";
  const picture = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <Person
      name={name}
      age={age}
      job={job}
      picture={picture}/>

      <List/>
      
    </div>
  );
}

export default App;