import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import Loader from "./Loader"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "productos")
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProduct(docs)
    })
  }, [])

  const filteredProducts = product.filter((producto) => producto.id === id)

  return (
    <div className='detalle'>
      {filteredProducts.length > 0 ?
        filteredProducts.map(p => {
          return (
            <ItemDetail key={p.descripcion} producto={p} id={p.id} nombre={p.nombre} precio={p.precio} />
          )
        })
        : <Loader />
      }

    </div>
  )


}

export default ItemDetailContainer