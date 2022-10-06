import { useState } from 'react'
import NavIcon from './NavIcon'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom"
import * as ioniconsSolid from '@styled-icons/ionicons-solid'
const Nav = () => {
    const [darkMode, setDarkMode] = useState(false)
    const DarkModeIcon = ({ className }) => darkMode ? <ioniconsSolid.Sunny className={className} /> : <ioniconsSolid.Moon className={className} />
    return (<nav className="sticky top-0 z-50 flex items-center justify-center w-auto h-20 mx-1 mt-0 transition-all duration-500 navbar dark:bg-softred-300 dark:bg-opacity-80 dark:shadow-sp shadow-sp bg-softred-500 backdrop-blur bg-opacity-60 rounded-b-md">
        <Link to="/" className="flex-1 cursor-pointer">
            <NavIcon className="w-16 ml-10 transition-all duration-500 hover:w-20 aspect-square drop-shadow-sp hover:animate-wiggle" />
            <h1 className="text-xl font-semibold">DinoGo!</h1>
        </Link>
        <div className="flex-none">
            <div className="scale-90">
                <button className="relative block w-16 h-8 rounded-[6.25rem] bg-zinc-500" onClick={() => {
                    setDarkMode(!darkMode)
                    document.body.classList.toggle("dark")
                }}>
                    <i className={`${darkMode ? 'translate-x-8' : 'translate-x-0'} transition-all duration-500 flex items-center justify-center w-8 h-8 scale-90 rounded-full bg-zinc-700`}>
                        <DarkModeIcon className="text-white w-7 h-7" />
                    </i>
                </button>
            </div>
            <CartWidget />
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content dark:bg-zinc-700 bg-base-100 rounded-box w-52">
                    <li className="dark:text-gray-100">
                        <a className="justify-between">
                            Profile
                            <span className="badge dark:bg-softred-500">New</span>
                        </a>
                    </li>
                    <li className="dark:text-gray-100"><a>Settings</a></li>
                    <li className="dark:text-gray-100"><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </nav>)
}
export default Nav