import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./components/Cart"
import ItemDetailContainer from "./components/ItemDetailContainer"
const App = () => {
  const greeting= 'Bienvenidos a Nuestra tienda online'

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path= '/cart' element={<Cart/>}/>
      <Route exact path= '/' element={<ItemListContainer greeting={greeting}/>}/>
      <Route exact path= '/categoria/:categoria' element={<ItemListContainer/>}/>
      <Route exact path='/item/:id' element ={<ItemDetailContainer/>}/>
    </Routes>

    </BrowserRouter>
  )
}


export default App
