import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import StoreCard from "../StoreCard"
import { getStores } from "../../DataHandlers"
const StoresMain = () => {
    const { category } = useParams()
    const [stores, setStores] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await getStores(category)
            return data
        }
        fetchData()
            .then((data) => {
                setTimeout(() => {
                    setStores(data)
                }, 3000)
            })
    }, [])
    return (
        <section className="flex flex-wrap justify-center w-4/5 max-w-5xl gap-3 py-12">
            {stores.map(({ id, name, img, link }) => <StoreCard key={id} id={id} name={name} alt={name} link={link} img={`${process.env.PUBLIC_URL}/img/${img}`} />)}
        </section>
    )
}
export default StoresMain