const productos =[
{id: '1' , categoria: 'Hamburguesas', nombre: 'Hamburguesa completa',descripcion:"Carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla", precio:'$550' , foto:'https://firebasestorage.googleapis.com/v0/b/react-2679e.appspot.com/o/hamburguesacompleta.jpg?alt=media&token=5496202f-4f32-4c1b-ba62-b51b824e27a5'},
{id: '2' , categoria: 'Hamburguesas', nombre: 'Hamburguesa doble',descripcion:"Medallón de deliciosa carne 100% vacuna, queso cheddar,lechuga,tomate, kétchup y mostaza",precio:'$650' , foto:'https://firebasestorage.googleapis.com/v0/b/react-2679e.appspot.com/o/hamburguesadoble.jpg?alt=media&token=e51f6ce0-01b0-4cbb-9e43-22ac16be3d29'},
{id: '3' , categoria: 'Hamburguesas', nombre: 'Hamburguesa doble cheedar',descripcion:" Doble cheddar, una combinación perfecta junto al clásico esponjoso pan para que disfrutes.", precio:'$600' , foto:'https://firebasestorage.googleapis.com/v0/b/react-2679e.appspot.com/o/hamburguesadoblecheedar.png?alt=media&token=f1c76ed9-dc55-4603-9191-bab07815744d'},
{id: '4' , categoria: 'Hamburguesas', nombre: 'Hamburguesa simple',descripcion:"Carne, queso cheddar y cebolla, acompañados de kétchup, mostaza y mayonesa.",precio:'$450' , foto:'https://firebasestorage.googleapis.com/v0/b/react-2679e.appspot.com/o/hamburguesaSimple.png?alt=media&token=17d6f6ee-afca-49a5-b40b-240c985fb65b'},
{id: '5' , categoria: 'Veggie', nombre: 'Hamburguesa Veggie completa',descripcion:"Acompañadas del clásico pan, mostaza, kétchup, queso derretido, y un toque de cebolla que la hace única.", precio:'$550' , foto:'https://firebasestorage.googleapis.com/v0/b/react-2679e.appspot.com/o/hamburguesaVeggiecompleta.png?alt=media&token=1e5c2f68-505d-4b35-8f80-50f6a3c4ece2'},
{id: '6' , categoria: 'Veggie', nombre: 'Hamburguesa Veggie simple',descripcion:"La textura de la soja hace un gran equipo con la suavidad de la mayonesa ,un colchón de lechuga y tomate.", precio:'$450' , foto:'https://firebasestorage.googleapis.com/v0/b/react-2679e.appspot.com/o/1509615048_727318_1509617190_noticia_grande.jpg?alt=media&token=0fe41b16-3d85-4438-ae00-0f7f56aa11b2'},

];

export const getFetch= new Promise( (  res,rej) => {

let condition = true
if (condition){
setTimeout(() =>{
 res(productos)
 

},2000)

} else{
    rej('400 error no found')
}

})