import { useLayoutEffect, useRef, useState } from 'react';
import { FoodPizza } from '@styled-icons/fluentui-system-filled/FoodPizza'
import { IceCream } from '@styled-icons/ionicons-sharp/IceCream'
import { Fastfood } from '@styled-icons/material-rounded/Fastfood'
import { FoodToast } from '@styled-icons/fluentui-system-regular/FoodToast'
import { DeliveryDining } from '@styled-icons/material-rounded/DeliveryDining'
import { Medication } from '@styled-icons/material-rounded/Medication'
import { PepperHot } from '@styled-icons/fa-solid/PepperHot'
import { BowlRice } from '@styled-icons/boxicons-solid/BowlRice'
import { Link } from "react-router-dom"
const CategoryCard = ({ link, id, cat }) => {
    const ref = useRef([]);
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
        ref.current.forEach((ref) => {
            ref && setWidth(ref.offsetWidth)
        })
    })
    const refs = (el) => {
        el && ref.current.push(el)
    }
    const categorySwitch = (id) => {
        const category = {
            "🍕": <FoodPizza />,
            "🥞": <FoodToast />,
            "🍨": <IceCream />,
            "🍔": <Fastfood />,
            "🌮": <PepperHot />,
            "🍣": <BowlRice />,
            "💊": <Medication />,
            "🛵": <DeliveryDining />
        }
        return category[id]
    }
    const fontSizeCalc = (cat) => {
        let size = width / cat.length
        if (size < 17) {
            size = 17
        } else if (size > 23) {
            size = 23
        }
        return size + "px"
    }
    const updateSize = ({ ref }) => {
        ref.current.forEach((ref) => {
            ref && (ref.style.fontSize = fontSizeCalc(ref.innerText))
        })
    }
    window.onresize = () => {
        ref.current.forEach((ref) => {
            ref && setWidth(ref.offsetWidth)
        })
        updateSize({ ref })
    }
    return (
        <Link to={`/${link}`} className="center overflow-y-hidden flex h-16 w-[85%] xl:w-[17%] cursor-pointer items-center justify-evenly gap-x-0 rounded from-slate-300 transition-all duration-700 shadow sm:w-[43%] lg:w-[27%]">
            <h3 ref={refs} className="inline w-3/5 font-medium" style={{ fontSize: fontSizeCalc(cat) }}>{cat}</h3>
            <i className="w-1/5 max-h-fit aspect-square">{categorySwitch(id)}</i>
        </Link>
    )
}
export default CategoryCard