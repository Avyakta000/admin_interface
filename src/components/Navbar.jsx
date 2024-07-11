import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { PanelContext } from '../context/PanelContext';

const Navbar = () => {
    const location = useLocation();
    const { logout, isAuthenticated } = useContext(PanelContext);

    return (
        <nav className="flex justify-between items-center py-2 px-[4rem] text-black bg-white border-b-pink-400 border-2 md:flex-row flex-col">
            <div className="flex items-center">
                <h2 className='font-bold mx-8'>Divueens <span className='text-pink-500'> Administration </span> </h2>
            </div>

            {isAuthenticated ? (
                <ul className="flex items-center md:flex-row flex-col space-x-6 px-4">
                    <li className="flex mr-6 md:mr-0">
                        <input
                            type='search'
                            placeholder="Search"
                            className='rounded-full focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-600 p-2 border-pink-400 border-2'
                        />
                    </li>
                    {/* <li className="flex mr-6 md:mr-0">
                        <Link to={"/signup"} className="text-pink-500 font-semibold hover:bg-pink-500 hover:text-white rounded px-2 py-1">
                            Signup
                        </Link>
                    </li> */}
                    <li className="flex mr-6 md:mr-0">
                        <Link onClick={logout} className="text-pink-500 font-semibold hover:bg-pink-500 hover:text-white rounded px-2 py-1">
                            Logout
                        </Link>
                    </li>
                    <Link to={"/admin-profile"} className="relative text-pink-500 hover:text-pink-700 md:relative md:flex md:items-center">
                        <FaUser />
                    </Link>
                </ul>
            ) : (
                <>
                    {location.pathname === "/login" ? (
                        <Link to={"/signup"} className="text-pink-500 font-semibold hover:bg-pink-500 hover:text-white rounded px-2 py-1 mr-[5rem]">
                            Signup
                        </Link>
                    ) : (
                        <Link to={"/login"} className="text-pink-500 font-semibold hover:bg-pink-500 hover:text-white rounded px-2 py-1 mr-[5rem]">
                            Login
                        </Link>
                    )}
                </>
            )}
        </nav>
    );
};

export default Navbar;


// import React, { useContext } from 'react'
// import { FaUser } from 'react-icons/fa'
// import { Link, useLocation, } from 'react-router-dom'
// import { PanelContext } from '../context/PanelContext'


// const Navbar = () => {
//     const pathname = useLocation()
//     const { logout, isAuthenticated } = useContext(PanelContext)
//     return (
//         <>

//             <nav className="flex justify-between items-center py-2 text-black bg-white border-b-pink-400 border-2 md:flex-row flex-col">
//                 <div className="flex items-center ">
//                     <h2 className='font-bold mx-8'>Divueens <span className='text-pink-500'> Administration </span> </h2>
//                 </div>

//                 {
//                     isAuthenticated ?
//                         <>
//                             <ul className="flex items-center md:flex-row flex-col space-x-6 px-4">
//                                 <li className="flex mr-6 md:mr-0">
//                                     <input type='search' placeholder="Search" className='rounded-full focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-600 p-2 border-pink-400 border-2'></input>
//                                 </li>
//                                 <li className="flex mr-6 md:mr-0">
//                                     <Link to={"/signup"} className="text-pink-500 font-semibold  hover:bg-pink-500 hover:text-white rounded px-2 py-1">
//                                         Signup
//                                     </Link>
//                                 </li>
//                                 <li className="flex mr-6 md:mr-0">

//                                     <Link onClick={logout} className="text-pink-500 font-semibold hover:bg-pink-500 hover:text-white rounded px-2 py-1">
//                                         Logout
//                                     </Link>
//                                 </li>
//                                 <Link to={"/admin-profile"} className="relative text-pink-500 hover:text-pink-700 md:relative md:flex md:items-center ">
//                                     <FaUser />
//                                 </Link>
//                             </ul>

//                         </>
//                         : { pathname==="/login" ?   <Link to={"/signup"} className="text-pink-500 font-semibold  hover:bg-pink-500 hover:text-white rounded px-2 py-1 mr-[5rem]">
//                         Login
//                     </Link>  :   <Link to={"/signup"} className="text-pink-500 font-semibold  hover:bg-pink-500 hover:text-white rounded px-2 py-1 mr-[5rem]">
//                             Signup
//                         </Link> }

                      
//                 }
//             </nav>

//         </>
//     )
// }

// export default Navbar