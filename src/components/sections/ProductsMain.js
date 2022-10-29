import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductsCard from "../ProductsCard"
import { getProducts } from "../../DataHandlers"
const ProductsMain = () => {
    const { store } = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts(store)
            return data
        }
        fetchData()
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <section className="flex flex-wrap justify-center w-[90%] gap-3 py-12">
            {products.map(({ id, name, price, description }) => <ProductsCard key={id} id={id} name={name} price={price} description={description} />)}
        </section>
    )
}
export default ProductsMain