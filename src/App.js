import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const doctors = [
  {name: 'Dr. Mahfuxz', job: 'singer'},
  {name: 'Dr.Eva', job: 'singer'},
  {name: 'Dr. Mihir', job: 'singer'},
  {name: 'Dr. AShik', job: 'singer'},
]
function App() {
  const nayoks = ['Rubel', 'BappaDa', 'Kuber', 'Jashim', 'Salman Shah']
  return (
    <div className="App">

      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {
        doctors.map(doctor => <Doctor name={doctor.name} job={doctor.job}> </Doctor>)
      }

     {/* <Person name="Rubel" nykia="mousumi"></Person>
     <Person name="bappraz" nykia="purnima"></Person>
     <Person name="riaj" nykia="sabnur"></Person> */}
     {/* <Person></Person>
     <Person></Person>
     <Person></Person>
     <Person></Person>
     <Person></Person> */}
     <h1>New component .YAY</h1>
     <Friend></Friend>
     <Friend></Friend>
     <Friend></Friend>
     <Friend></Friend>
     

     <Counter></Counter>
     <ExternalUsers></ExternalUsers>
    </div>
  );
}

// function Person(){
//   return (
//     <div className='person'>
//       <h1>Sakib AL Hasan</h1>
//       <p>Profession: Cricket</p>
//     </div>
//   )
// }

function Doctor(props){
   return (
    <div className='friend'>
      <h1>{props.name}</h1>
      <h5>{props.job}</h5>
    </div>
   )
}
function Person(props){
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      {/* <p>nyika: {props.nykia}</p> */}
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

function Counter(){
  const [count, setCount] = useState(55)
  const increaseCount = () => setCount(count + 1)
  const dncreaseCount = () => setCount(count - 1)
  //   const newCount = count + 1
  //   setCount(newCount)
  // }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={dncreaseCount}>Decrease</button>
    </div>
  )
}

function ExternalUsers (){
   const [users, setUsers] = useState([])
   useEffect( ()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => setUsers(data))
   },[])
  return (
    <div>
      <h2>External User</h2>
      {/* <p>Name: {users.name}</p> */}
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return (
    <div style={{border: '2px solid red', margin:'20px'}}>
      <h3>Name: {props.name}</h3>
      <h6>Email: {props.email}</h6>
    </div>
  )
}

export default App;

