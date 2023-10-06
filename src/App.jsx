import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./components/Cart"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Form from "./components/Form"
import ShoppingCartProvider from "./context/ShoppingCartContext"

const App = () => {
  const greeting = 'Bienvenidos a Nuestra tienda online'

  return (
    <>
      <BrowserRouter>
        <ShoppingCartProvider>
          <NavBar />
          <Routes>
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/' element={<ItemListContainer greeting={greeting} />} />
            <Route exact path='/categoria/:categoria' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/Form' element={<Form />} />
          </Routes>
        </ShoppingCartProvider>
      </BrowserRouter>

    </>

  )
}


export default App
