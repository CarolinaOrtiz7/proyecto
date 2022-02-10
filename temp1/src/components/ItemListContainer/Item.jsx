import { Link } from "react-router-dom"

export function Items( {prod} ) {
    console.log('item');
    return(
<div className='menu'>
       
        
      <div className='cartItem'>
     <div >
           {`${prod.nombre}`}
        </div>
            <div className="card-body">
                <img src={prod.foto} alt='' className="photos" /><br></br>
                    {prod.precio} <br></br>
                    <h4 className="descrip">{prod.descripcion}</h4><br></br> 
      </div>
      <div className='cartItem-left'>
    

      <div >
          <Link to={`detalle/${prod.id}`}>
           <Button className='detalle'>Detalle</Button>
           </Link>
                
        </div> 
        </div>
    </div>


</div>
        )

      
        

    

}