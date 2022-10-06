export const getCategories = async () => {
    const URL = `${process.env.PUBLIC_URL}/db/categories.json`
    const res = await fetch(URL)
    const data = res.json()
    return data
}
export const getStores = async (cat) => {
    const URL = `${process.env.PUBLIC_URL}/db/stores-db/${cat}.json`
    const res = await fetch(URL)
    const data = res.json()
    return data
}
export const getProducts = async (store) => {
    const URL = `${process.env.PUBLIC_URL}/db/stores-db/products-db/${store}.json`
    const res = await fetch(URL)
    const data = res.json()
    return data
}