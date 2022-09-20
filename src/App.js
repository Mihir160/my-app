import logo from './logo.svg';
import './App.css';

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
        doctors.map(doctor => <Doctor name={doctor.name}> </Doctor>)
      }

     {/* <Person name="Rubel" nykia="mousumi"></Person>
     <Person name="bappraz" nykia="purnima"></Person>
     <Person name="riaj" nykia="sabnur"></Person> */}
     {/* <Person></Person>
     <Person></Person>
     <Person></Person>
     <Person></Person>
     <Person></Person> */}
     {/* <h1>New component .YAY</h1>
     <Friend></Friend>
     <Friend></Friend>
     <Friend></Friend>
     <Friend></Friend> */}

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

export default App;

