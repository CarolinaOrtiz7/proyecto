import  ItemCount  from './ItemCount';
import React from 'react';


function ItemListContainer () {

    function onAdd (cant){
        console.log(cant)
    }

    
    return( <div>
        
       
        <ItemCount stock={10} inicial={1} onAdd={onAdd} />
    </div>
    )
}


export default ItemListContainer