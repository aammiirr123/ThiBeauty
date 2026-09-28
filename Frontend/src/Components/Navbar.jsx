import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const [visible, setvisible] = useState(false);

    const location = useLocation();

    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
    const [showProfileMenu, setShowProfileMenu] = useState(false)

    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
        navigate('/login')

    }

    return (
        <div className='flex items-center justify-between py-5 font-medium '>
            <NavLink to='/' >
                <img src={assets.logo} className='w-22' alt='logo' />
            </NavLink>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700 ml-[32px] ]'>
                <NavLink to='/' className='flex  flex-col items-center gap-1 '>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/allproduct' className='flex  flex-col items-center gap-1 '>
                    <p>ALL-PRODUCTS</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/about' className='flex  flex-col items-center gap-1 '>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/contact' className='flex  flex-col items-center gap-1 '>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className="flex items-center gap-6">
               {location.pathname === '/allproduct' && ( <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="search-icon" className='w-5 min-w-5' /> )}

                <div className='relative group'>
                    <img onClick={() => { if (!token) {
                        navigate('/login')
                    } else {
                        setShowProfileMenu(!showProfileMenu)
                    }
                }} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                    {/* Dropdown menu */}
                    {token && 
                        <div className={`absolute right-0 pt-4 z-50 ${showProfileMenu ? 'block' : 'hidden'  } md:group-hover:block`}>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-grey-500'>
                                <p onClick={()=> {navigate('/profile') ;setShowProfileMenu(false)}} className='cursor-pointer hover:text-black'>My Profile</p>
                                <p onClick={()=> {navigate('/orders');setShowProfileMenu(false)}} className='cursor-pointer hover:text-black'>Orders</p>
                                <p onClick={()=> {logout() ;setShowProfileMenu(false)}}  className='cursor-pointer hover:text-black'>Logout</p>
                            </div>
                        </div>}
                </div>

                <Link to='cart' className='relative'>
                    <p className='absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-black text-white rounded-full text-[10px]'>{getCartCount()}</p>
                    <img src={assets.cart} alt="Cart" className='w-9 ' />
                </Link>
                <img onClick={() => setvisible(true)} src={assets.menu} className='w-6 cursor-pointer sm:hidden' alt="Menu" />
            </div>

            {/* Sidebar Menu For Smaller Screeen */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={() => setvisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-90' src={assets.dropdown} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to='/allproduct'>ALL-PRODUCTS</NavLink>
                    <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Navbar
