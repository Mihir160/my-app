import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <Person></Person>
     <Person></Person>
     <Person></Person>
     <Person></Person>
     <h1>New component .YAY</h1>
     <Friend></Friend>
     <Friend></Friend>
     <Friend></Friend>
     <Friend></Friend>

    </div>
  );
}

function Person(){
  return (
    <div className='person'>
      <h1>Sakib AL Hasan</h1>
      <p>Profession: Cricket</p>
    </div>
  )
}

function Friend(){
  return (
    <div className='friend'>
      <h3>Name: Ajay Devgun</h3>
      <p>Job: mara mari</p>
    </div>
  )
}

export default App;

