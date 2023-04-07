import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../api/discover';
import {Toaster, toast} from 'react-hot-toast';
import LoadingModal from '../../modals/LoadingModal';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        if(email.includes(" ") || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            toast.error("Invalid email.");
            return;
        }
        setIsLoading(true);
        const data = await userLogin(email,password);
        setIsLoading(false);
        if(data.error){
            toast.error(data.error);
            return;
        }
        
        localStorage.token = data.token;
        localStorage.email = email.toLowerCase();
        navigate('/');
    }

    return (
        <div className="h-screen w-full bg-login-bg bg-cover bg-center bg-fixed">
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            {isLoading && <LoadingModal />}
            <div className='w-full h-screen bg-black/70 flex justify-center items-center relative'>
                <nav className='h-12 w-full bg-transparent absolute top-0 flex items-center backdrop-blur-md sm:h-16'>
                    <span className='text-white mx-4 italic font-bold sm:text-lg sm:mx-10 tracking-wide'>Logo</span>
                </nav>
                <form action='' onSubmit={handleSubmit} className='flex flex-col items-center space-y-5'>
                    <h1 className='text-white font-bold text-[30px]'>LogIn here</h1>
                    <input onChange={(e)=>setEmail(e.target.value)} className='w-80 md:w-96 p-2 px-3 bg-transparent border border-white outline-none rounded-lg text-white' type="email" placeholder="Enter your email" required></input>
                    <input onChange={(e)=>setPassword(e.target.value)} className='w-80 md:w-96 p-2 px-3 bg-transparent border border-white outline-none rounded-lg text-white' type="password" placeholder='Enter Password' required></input>
                    <div className='text-gray-400'>
                        New here? &nbsp;
                        <span className='text-white text-lg hover:border-b border-spacing-5 duration-300 cursor-pointer' onClick={()=>navigate('/signup')}>Register</span>
                    </div>
                    <input className='w-80 md:w-96 p-2 px-3 bg-transparent border border-white outline-none rounded-lg text-white hover:bg-white hover:text-black duration-300 cursor-pointer' type="submit" value="Login"></input>
                </form>
            </div>
        </div>
    );
};

export default Login;