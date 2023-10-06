import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {
  const { categoria } = useParams()

  const [products, setProducts] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "productos")
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProducts(docs)
    })
  }, [])


  const filteredProducts = products.filter((producto) => producto.categoria === categoria)


  return (
    <>
      <h2>{greeting}</h2>

      {categoria ? <ItemList productos={filteredProducts} /> : <ItemList productos={products} />}
    </>
  )
}

export default ItemListContainer