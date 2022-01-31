import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer';
import Cart from './components/Cart/Cart';



function App() {

  
  return (

    <BrowserRouter>
   
    <div className="App" >
     <NavBar/>

     <Routes>
       
       <Route exact path='/' element={<ItemListContainer/>}/>
       <Route exact path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
       <Route exact path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
       <Route exact path='/cart' element={<Cart/>}/>
     
     </Routes>

    </div>
   
    </BrowserRouter>
  );
}

export default App;
