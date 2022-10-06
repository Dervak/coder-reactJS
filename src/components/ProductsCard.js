import { useState} from "react"
import {Add} from "@styled-icons/material-twotone/Add"
import {Minus} from "@styled-icons/evaicons-solid/Minus"
const ProductsCard = ({ id, name, price, description }) => {
    const [count, setCount] = useState(0)
    const addCount = () => { setCount(count + 1) }
    const extractCount = () => { count > 0 && setCount(count - 1) }
    const handleCount = (op) => {
        const countSwitch = {
            "+": addCount,
            "-": extractCount
        }
        countSwitch[op]()
    }
    return (
        <div key={id} className="flex justify-between gap-x-3 p-4 h-60 w-full lg:w-[48%] bg-slate-300 shadow-md rounded-xl dark:shadow-slate-500 items-center">
            <div className="flex items-center w-[75%]">
                <img className="w-1/4 rounded" src="https://placeholder.pics/svg/300" alt="" />
                <div className="flex w-3/4 flex-col pl-4">
                    <h2 className="font-semibold text-xl">{name}</h2>
                    <p className="text-gray-700 w-full">{description}</p>
                </div>
            </div>
            <div className="flex h-full justify-end w-[30%] mr-6">
                <div className="flex items-center flex-col">
                    <span className="text-2xl my-auto font-extrabold">${price}</span>
                    <div className="flex items-center justify-center">
                        <button onClick={() => handleCount("-")} className="flex justify-center items-center font-bold text-xl rounded-[50%] bg-softred-300 h-6 w-6 aspect-square"><Minus/></button>
                        <span className="px-2 text-xl">{count}</span>
                        <button onClick={() => handleCount("+")} className="flex justify-center items-center font-bold text-xl rounded-[50%] bg-softred-300 h-6 w-6 aspect-square"><Add/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductsCard