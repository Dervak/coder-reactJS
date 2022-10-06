import {Link} from "react-router-dom"
const StoreCard = ({ id, name, img, link }) => {
    return (
        <Link to={link} key={id} className="flex flex-col transition-all duration-500 shadow-md cursor-pointer active:scale-95 hover:scale-105 h-80 w-60 bg-slate-300 rounded-2xl dark:shadow-slate-500">
            <img className="self-center object-cover w-full min-h-3/5 rounded-t-2xl" src={img} />
            <div className="flex flex-col items-center my-auto">
                <h3 className="py-4 font-semibold text-center text-slate-800">{name}</h3>
                {/* <p className="px-4 text-gray-500">{cat}</p> */}
            </div>
        </Link>
    )
}
export default StoreCard