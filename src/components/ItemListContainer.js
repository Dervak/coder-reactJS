const ItemListContainer = ({greetings = "estimado usuario."}) => {
    return(
        <h2 className="text-5xl font-semibold dark:text-white">Que necesitas hoy {greetings}</h2>
    )
}
export default ItemListContainer