const ItemListContainer = ({greetings = "estimado usuario."}) => {
    return(
        <h2 className="text-5xl font-semibold text-center mt-10 transition-all duration-500 dark:text-white">Que necesitas hoy {greetings}</h2>
    )
}
export default ItemListContainer