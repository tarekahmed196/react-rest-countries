
import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
      
    </div>
  );
}

/* function LoadCountries(props){
  const [countries, setCountries]= useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data));
    
  }, []);
  return (
    <div>
      <h2>Visiting rest countries of the world!!!</h2>
      <h4>Available countries: {countries.length}</h4>
      {
        countries.map(country=> <Country name={country.name.common} flags={country.flags.png}></Country> )
        
      }
    </div>
  )
}

function Country(props){
  return (
    <div>
      <h2>country name:{props.name}</h2>
      <h1>flags: {props.flags}</h1>
      
    </div>
  )
} */

export default App;
