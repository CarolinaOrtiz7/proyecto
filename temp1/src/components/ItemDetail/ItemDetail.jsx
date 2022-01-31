import ItemCount from "../ItemListContainer/ItemCount";


const ItemDetail = ({product}) => {

  function onAdd(cant) {
      console.log(cant)
  }

return <div>
      <div className="row">
      <div className="col">
          <div className="container">
              <h3>{product.nombre}</h3> 
              <img src={product.foto} alt='' className='fotodetalle'/><br></br>
              <h8 className="descripcion">{product.descripcion}</h8><br></br> 
          </div>
      </div>
      <div className="contador">
          <ItemCount onAdd={onAdd} inicial={1} stock={6}/> 
          
      </div>
      </div>

</div>;
};

export default ItemDetail;
