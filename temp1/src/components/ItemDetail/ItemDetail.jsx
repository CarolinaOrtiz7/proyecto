import React from 'react';


const ItemDetail = (props) => {
  const { nombre, categoria,descripcion,precio,foto} =
   props.productos;
  return (
    <>
      <h1>{nombre}</h1>
      <h4>Categoria:{categoria}</h4>
      <h4>Descripcion: {descripcion}</h4>
      <h4>Precio: {precio}</h4>
       <h4>{foto}</h4>
    </>
  );
};

export default ItemDetail;
