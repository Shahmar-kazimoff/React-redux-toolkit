import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import navbar from "./Navbar.module.css";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline, IoCloseOutline } from 'react-icons/io5';
import { MdDelete } from "react-icons/md";
import { removeBasket } from "../../../Slice/BasketSlice";
import { useDispatch, useSelector } from 'react-redux';
import Chechkout from "../../../pages/Checkout/Chechkout";




const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const [isOpen, setIsOpen] = useState(false);

    const openSidebar = () => {
        setIsOpen(true);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };
    const dispatch = useDispatch()
    const basket = useSelector(state => state.basket.initialBasket)
    const total = useSelector(state => state.basket.total)
    return (
        <div className={`fixed right-0 left-0 flex justify-between items-center px-8 py-3 ${scrollY > 200 ? 'bg-white duration-300 ' : ''}`}>
            <div>
                <NavLink className="text-[15px] font-bold" to="/">P R O D U C T .</NavLink>
            </div>

            <div className="lg:hidden relative z-1">
                <button onClick={toggleMobileMenu} className="text-3xl focus:outline-none">
                    ☰
                </button>
            </div>

            <nav className="hidden lg:flex">
                <ul className={navbar.navbarStyle}>
                    <li className="hover:text-black text-xs font-thin underline-offset-8">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "black" : "",
                            textDecoration: isActive ? "underline 1px " : "none",
                        })}
                            to="/"
                            end
                        >
                            N E W
                        </NavLink>
                    </li>
                    <li className="hover:text-black text-xs font-thin underline-offset-8">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "black" : "",
                            textDecoration: isActive ? "underline 1px " : "none",
                        })}
                            to="/men"
                        >
                            M E N
                        </NavLink>
                    </li>
                    <li className="hover:text-black text-xs font-thin underline-offset-8">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "black" : "",
                            textDecoration: isActive ? "underline 1px " : "none",
                        })}
                            to="/women"
                        >
                            W O M E N
                        </NavLink>
                    </li>
                    <li className="hover:text-black text-xs font-thin underline-offset-8">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "black" : "",
                            textDecoration: isActive ? "underline 1px " : "none",
                        })}
                            to="/accessories"
                        >
                            A C C E S S O R I E S
                        </NavLink>
                    </li>
                    <li className="hover:text-black text-xs font-thin underline-offset-8">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "black" : "",
                            textDecoration: isActive ? "underline 1px " : "none",
                        })}
                            to="/jewelry"
                        >
                            J E W E L R Y
                        </NavLink>
                    </li>
                    <li className="hover:text-black text-xs font-thin underline-offset-8">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "black" : "",
                            textDecoration: isActive ? "underline 1px " : "none",
                        })}
                            to="/about"
                        >
                            A B O U T
                        </NavLink>
                    </li>
                    <li className="hover:text-black text-xs font-thin underline-offset-8">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "black" : "",
                            textDecoration: isActive ? "underline 1px " : "none",
                        })}
                            to="/contact"
                        >
                            C O N T A C T
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className={`lg:hidden fixed top-0 py-20 px-10 right-0 w-80 h-[100%] bg-white ${isMobileMenuOpen ? 'block' : 'hidden'} transition-opacity`}>
                <ul className="flex flex-col font-medium text-md gap-4 text-[#747576]">
                    <li className="hover:text-black text-xs font-thin underline-offset-8">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "black" : "",
                            textDecoration: isActive ? "underline 1px " : "none",
                        })}
                            to="/"
                            end
                        >
                            N E W
                        </NavLink>
                    </li>
                    <li className="hover:text-black text-xs font-thin underline-offset-8">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "black" : "",
                            textDecoration: isActive ? "underline 1px " : "none",
                        })}
                            to="/men"
                        >
                            M E N
                        </NavLink>
                    </li>
                    <li className="hover:text-black text-xs font-thin underline-offset-8">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "black" : "",
                            textDecoration: isActive ? "underline 1px " : "none",
                        })}
                            to="/women"
                        >
                            W O M E N
                        </NavLink>
                    </li>
                    <li className="hover:text-black text-xs font-thin underline-offset-8">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "black" : "",
                            textDecoration: isActive ? "underline 1px " : "none",
                        })}
                            to="/accessories"
                        >
                            A C C E S S O R I E S
                        </NavLink>
                    </li>
                    <li className="hover:text-black text-xs font-thin underline-offset-8">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "black" : "",
                            textDecoration: isActive ? "underline 1px " : "none",
                        })}
                            to="/jewelry"
                        >
                            J E W E L R Y
                        </NavLink>
                    </li>
                    <li className="hover:text-black text-xs font-thin underline-offset-8">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "black" : "",
                            textDecoration: isActive ? "underline 1px " : "none",
                        })}
                            to="/about"
                        >
                            A B O U T
                        </NavLink>
                    </li>
                    <li className="hover:text-black text-xs font-thin underline-offset-8">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "black" : "",
                            textDecoration: isActive ? "underline 1px " : "none",
                        })}
                            to="/contact"
                        >
                            C O N T A C T
                        </NavLink>
                    </li>
                </ul>
            </div>

            <Outlet />
            <div className="lg:right-0 lg:relative absolute right-20">
                <div className="flex gap-2 text-2xl">
                    <IoIosSearch className="cursor-pointer" />
                    <IoPersonOutline className="cursor-pointer" />
                    <div>
                        <div className="relative">
                            <IoCartOutline className="cursor-pointer" onClick={openSidebar} />
                            <span className="absolute -top-1 left-4 px-[5px] text-white font-semibold bg-green-500 rounded-full text-xs">{basket.length}</span>
                        </div>
                        {isOpen && (
                            <div className="fixed top-0 right-0 h-full w-80  bg-white shadow z-1">
                                <IoCloseOutline className="cursor-pointer absolute top-3 right-7 text-3xl" onClick={closeSidebar} />
                                <div className="mt-14 px-3 text-center flex flex-col gap-3">
                                    {basket && basket.map(product => (
                                        <div className="flex justify-between items-center gap-2" key={product.id}>
                                            <img className="w-14" src={product.image} />
                                            <p className="text-sm font-semibold">{product.name}</p>
                                            <p className="text-lg text-green-700">  {product.count}x £{product.price}</p>
                                            <MdDelete className="text-red-500 text-2xl cursor-pointer" onClick={() => { dispatch(removeBasket(product.id)) }} />
                                        </div>
                                    ))}
                                    <p className="font-semibold text-xl">Total Price : £{total}</p>

                                    <NavLink className="hover:bg-green-600 bg-green-500 px-3 py-1 rounded text-white font-bold" to="/checkout">Checkout</NavLink>
                                </div>

                            </div>

                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
