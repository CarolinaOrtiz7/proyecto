import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListContainer} from './components/ItemListContainer';


function App() {

  
  return (
    <div className="App" >
     <NavBar/>
     <ItemListContainer greetings="Soy una props" />
    </div>
  );
}

export default App;
