
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from "@reach/router";
import Hello from './components/Hello';
import Number from './components/Number';
import Color from './components/Color';
import BgColor from './components/BgColor';


function App() {
  return (
    <div className="App">
      <div className="d-flex col-8 mx-auto justify-content-around">
        <Link className= "btn btn-primary" to='/' >Home</Link>
        <Link className= "btn btn-primary" to='/Number/1' >Numbers</Link>
        <Link className= "btn btn-primary" to='/Hello' >Hello</Link>
        <Link className= "btn btn-primary" to= '/Hello/blue' >Colors</Link>
        <Link className= "btn btn-primary" to= 'Hello/blue/red' >Background Color</Link>
      </div>
      <Router>
        <Number path="/Number/:Number" />
        <Hello path= "/:Hello" />
        <Color path= "/Hello/:color" />
        <BgColor path= "Hello/:color/:Color" />
        

      </Router>
      <h1>Welcome</h1>


    

    </div>

      


  );
}

export default App;
