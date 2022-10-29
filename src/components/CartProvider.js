import { createContext, useState } from "react"

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const delCart = () => {
        setCart([])
    }

    const addItem = (add) => {
        const exists = checkItem(add)
        exists ?
            setCart(cart => cart.concat(exists)) :
            setCart(cart => cart.concat(add))
    }

    const delItem = (del) => {
        setCart(cart => cart.filter(items => items !== del))
    }

    const checkItem = (check) => {
        const repItem = cart.find(item => item.name === check.name)
        if (repItem) {
            setCart(cart => cart.filter(item => item.name !== check.name))
            repItem.count += check.count
            return repItem
        }
        return false
    }

    const cartHandler = {
        cart,
        delCart,
        addItem,
        delItem
    }

    return (
        <CartContext.Provider value={cartHandler}>
            {children}
        </CartContext.Provider>
    )
}
