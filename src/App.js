import './App.css';
import Person from './components/Person';

function App() {

  const name = "Cleitin";
  const age = "100";
  const job = "Fazedor de programas";
  const picture = "https://via.placeholder.com/150";


  return (
    <div className="App">
      <Person
      name="Rodrigo"
      age="20"
      job="Developer"
      picture=""/>

<Person
      name={name}
      age={age}
      job={job}
      picture={picture}/>
      
    </div>
  );
}

export default App;