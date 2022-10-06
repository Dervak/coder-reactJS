import CategoryCard from '../CategoryCard'
import { getCategories } from '../../DataHandlers'
import { useEffect, useState } from 'react'
const Main = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await getCategories()
            setCategories(data)
        }
        fetchData()
    }, [])
    return (
        <section className="flex flex-wrap justify-center w-4/5 max-w-5xl gap-1 py-12">
            {categories.map(({ link, id, cat }) => <CategoryCard key={id} id={id} cat={cat} link={link}/>)}
        </section>
    )
}
export default Main