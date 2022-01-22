import logo from './logo.svg';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  
  return (
    <div className="App" >
     <NavBar/>
     <ItemListContainer/>
     
    </div>
  );
}

export default App;
