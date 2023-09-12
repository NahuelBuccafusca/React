import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
const ItemListContainer = ({ greeting }) => {
 const {categoria}=useParams()
 
  const productos= [
    {id:1 ,categoria:'Remeras', nombre:'Remera manga corta' , descripcion:'Remeras básicas, colores: Negro, Rojo, Verde,Gris, Azul', precio:700 , stock:50, imageUrl:'https://http2.mlstatic.com/D_NQ_NP_921951-MLA44974973064_022021-O.webp'},
    {id:2 ,categoria:'Pantalones', nombre:'Pantalon' , descripcion:'Pantalones "Fila" originales, colores: Azul, Gris, Negro', precio:1200 ,stock:50, imageUrl:'https://filaar.vtexassets.com/arquivos/ids/6843204-800-auto?v=638199286436500000&width=800&height=auto&aspect=true'},
    {id:3 ,categoria:'Calzado', nombre:'Zapatilla' , descripcion:'Zapatilla p/ mujer colores: Beige,Rosas, Negras', precio:2500 ,stock:50, imageUrl:'https://clarika.b-cdn.net/prod/1d5f19f5-9be4-43a5-82ce-842bf2a7848d/product/IRISZAPATILLALADY_1_jhd.jpeg'},
    {id:4 ,categoria:'Accesorios', nombre:'Gorra' , descripcion:'Gorras "Nike" colores:Negro, Rojo, Verde,Gris, Azul ', precio:600 ,stock:50, imageUrl:'https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/A/V/AV8015-011_0.jpg'},
    {id:5 ,categoria:'Remeras', nombre:'Remera manga larga' , descripcion:'Remeras básicas manga larga, colores: Negro, Rojo, Verde,Gris, Azul', precio:850 ,stock:50, imageUrl:'https://www.saavedrasi.com.ar/thumb/REMERA-MANGA-LARGA1556808227320_800x800.jpg'},
    {id:6 ,categoria:'Pantalones', nombre:'Jeans' , descripcion:'Jeans colores claros y oscuros', precio:1500 ,stock:50, imageUrl:'https://tienda.guantexindustrial.com.ar/814-large_default/pantalon-jeans-bufalo-talle-54.jpg'},
    {id:7 ,categoria:'Calzado', nombre:'Zapatilla Runner' , descripcion:'Zapatilla para correr "Adidas" colores: Blanco y Negro', precio:2700 ,stock:50, imageUrl:'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5aed2c91d60f411ab87daf5400c5a112_9366/zapatillas-runfalcon-3.0.jpg'},
    {id:8 ,categoria:'Accesorios', nombre:'Reloj' , descripcion:'Reloj inteligente, hora, día, temperatura,cuenta kms, mensajes', precio:1000 ,stock:50, imageUrl:'https://www.heavenimagenes.com/heavencommerce/68ac9d04-8767-4aca-9951-49f2fea1383b/images/v2/GENERICO/24540_medium.jpg'}
  ]

  const getProductos= new Promise ((resolve,reject)=>{
    if(productos.length>0){
      setTimeout(()=>{
        resolve(productos)

      },2000)
    }else{
      reject (new Error ("no hay datos"))
    }
  })

  getProductos
  .then((res)=>{})
  .catch((error)=>{
    console.log(error)
  })

  const filteredProducts= productos.filter((producto)=>producto.categoria===categoria)
  
 

// /*PRACTICA CONSUMO API*/
//   const getProducts = async () => {
//     const response = await fetch("https://fakestoreapi.com/products")
//     const data = await response.json()
//     console.log(data)

//     return (data)
//   }
//   const [product, setProduct] = useState([])
//   useEffect(() => {
//     getProducts().then((product) => setProduct(product))
//   }, [])
//   console.log(product)

  return (
    <>
      <h2>{greeting}</h2>
      {categoria ? <ItemList productos={filteredProducts}/>:<ItemList productos={productos}/>}
    </>
  )
}

export default ItemListContainer