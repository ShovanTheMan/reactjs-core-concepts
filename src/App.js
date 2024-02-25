import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {name: 'James', Profession:'Singer'};
const singerStyle= {
  color: 'purple',
  backgroundColor: 'white'
}
function App() {
  return (
    <div className="App">
    <Person/>
    <Person/>
    <Person/>
    <h5>Rock Mama React Mama</h5>
    <Friend/>
    <Friend/>
    </div>
  );
}
                                                    
function Person(){
  return ( <div className="person">
    <h1>Sakib Al Hasan</h1>
    <p>Profession: Cricket</p>
  </div>
  )
}
function Friend(){
  return (
      <div className="container">
        <h3>Name: Ajay Devgan</h3>
        <p>job: Actor</p>
      </div>

  )
}

export default App;
