import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const navigate = useNavigate();
    const [isMenuHidden, setIsMenuHidden] = useState(true);

    function handleLogout(){
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        navigate('/login');
    }

    return (
        <div className='shadow-md lg:text-xl py-1 lg:py-2 bg-slate-100'>
            <div className='flex justify-between items-center relative px-4 sm:px-8 md:px-12 lg:px-20'>
                <div className='hamburger p-2 inline-block cursor-pointer md:hidden active:bg-slate-200' onClick={()=> setIsMenuHidden(!isMenuHidden)}>
                    <div className='line h-0.5 w-6 my-1 bg-black'></div>
                    <div className='line h-0.5 w-6 my-1 bg-black'></div>
                    <div className='line h-0.5 w-6 my-1 bg-black'></div>
                </div>
                <div className={`features absolute top-10 bg-slate-200 text-xl md:hidden mt-1 ${isMenuHidden && '-left-64'} px-4 w-48 py-2 transition`}>
                    <div className={`fitem cursor-pointer hover:underline hover:underline-offset-7`} onClick={()=>navigate('/')}>Dashboard</div>
                    <div className='fitem cursor-pointer hover:underline hover:underline-offset-7' onClick={()=>navigate('/profile')}>Profile</div>
                    <div className='fitem cursor-pointer hover:underline hover:underline-offset-7' onClick={handleLogout}>Logout</div>
                </div>
                <div className='logoContainer '>
                    <div className='inline-block font-extrabold'>Logo</div>
                </div>
                <div className='features hidden py-2 md:flex space-x-6'>
                    <div className={`fitem px-2 cursor-pointer hover:underline hover:underline-offset-8 ${props.currentPage ? 'underline underline-offset-8' : ''}`} onClick={()=>navigate('/')}>Dashboard</div>
                    <div className={`fitem px-2 cursor-pointer hover:underline hover:underline-offset-8 ${!props.currentPage ? 'underline underline-offset-8' : ''}`} onClick={()=>navigate('/profile')}>Profile</div>
                    <div className='fitem px-2 cursor-pointer hover:underline hover:underline-offset-8' onClick={handleLogout}>Logout</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;