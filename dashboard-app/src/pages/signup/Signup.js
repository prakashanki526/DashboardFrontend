import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VerifyOTP from '../../modals/VerifyOTP';
import {Toaster,toast} from 'react-hot-toast';
import { checkUserExist, otpMail } from '../../api/discover';

const Signup = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userData, setUserData] = useState({
        name:"",
        email:"",
        password:"",
        cpassword: ""
    })

    function validate(){
        if(userData.password.length < 6){
            toast.error("Password should contain atleast 6 characters.");
            return false;
        }
        if(userData.password !== userData.cpassword){
            toast.error("Password didn't match.")
            return false;
        }
        return true;
    }

    async function enableOTP(userData){   
        const data = await checkUserExist(userData.email);
        if(data.error){
            toast.error(data.error);
            return;
        }

        await otpMail(userData);
        
        
        // setFormData(userData);
        // setIsEnabledOTP(true);
    }

    async function handleRegister(e){
        e.preventDefault();
        if(!validate()) return;
        await enableOTP(userData);
        setIsModalOpen(true);
    }

    return (
        <div className="h-screen w-full bg-login-bg bg-cover bg-center bg-fixed">
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            {isModalOpen && <VerifyOTP userData={userData} setIsModalOpen={setIsModalOpen} />}
            <div className='w-full h-screen bg-black/70 flex justify-center items-center relative'>
                <nav className='h-12 w-full bg-transparent absolute top-0 flex items-center backdrop-blur-md sm:h-16'>
                    <span className='text-white mx-4 italic font-bold sm:text-lg sm:mx-10 tracking-wide'>Logo</span>
                </nav>
                <form action='' onSubmit={handleRegister} className='flex flex-col items-center space-y-5'>
                    <h1 className='text-white font-bold text-[30px]'>Register here</h1>
                    <input autoComplete='off' onChange={(e)=>setUserData({...userData, name:e.target.value})} className='w-80 md:w-96 p-2 px-3 bg-transparent border border-white outline-none rounded-lg text-white' type="text" placeholder="Enter full name" required></input>
                    <input autoComplete='off' onChange={(e)=>setUserData({...userData,email:e.target.value})} className='w-80 md:w-96 p-2 px-3 bg-transparent border border-white outline-none rounded-lg text-white' type="email" placeholder="Enter your email" required></input>
                    <input autoComplete='off' onChange={(e)=>setUserData({...userData, password:e.target.value})} className='w-80 md:w-96 p-2 px-3 bg-transparent border border-white outline-none rounded-lg text-white' type="password" placeholder='Enter password' required></input>
                    <input autoComplete='off' onChange={(e)=>setUserData({...userData, cpassword:e.target.value})} className='w-80 md:w-96 p-2 px-3 bg-transparent border border-white outline-none rounded-lg text-white' type="password" placeholder="Confirm password" required></input>
                    <div className='text-gray-400'>
                        Already have an account? &nbsp;
                        <span className='text-white text-lg hover:border-b border-spacing-5 duration-300 cursor-pointer' onClick={()=>navigate('/login')}>Login</span>
                    </div>
                    <input className='w-80 md:w-96 p-2 px-3 bg-transparent border border-white outline-none rounded-lg text-white hover:bg-white hover:text-black duration-300 cursor-pointer' type="submit" value="Register"></input>
                </form>
            </div>
        </div>
    );
};

export default Signup;