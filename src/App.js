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
    <Person name="rubel" nayika="mousumi"></Person>
    <Person name="bappa" nayika="prova"></Person>
    <Person name="shovan" nayika="hidden"></Person>
    <h5>Rock Mama React Mama</h5>
    <Friend movie="shingam" nayika="sonakki"></Friend>
    <Friend movie="Main huu Singam" nayika="kajol"></Friend>
    </div>
  );
}
  //similar in look differnt in data ====== props                                                  
function Person(props){
  
  return ( 
  <div className="person">
    <h1>Nayok: {props.name}</h1>
    <p>Nayika: {props.nayika}</p>
  </div>
  )
}
function Friend(props){
  return (
      <div className="container">
        <h3>Name: Ajay Devgan</h3>
        <p>Details: {props.movie}</p>
        <p>Nayika: {props.nayika}</p>
      </div>

  )
}

export default App;
