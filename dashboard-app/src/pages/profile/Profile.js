import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import profileImg from '../../assets/images/profile.png';
import { getUser } from '../../api/discover';
import Loader from '../../components/loader/Loader';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchUserData(){
        setIsLoading(true);
        const data = await getUser(localStorage.email);
        setUserData(data);
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchUserData();
    },[])

    return (
        <div>
            <div className='navbarContainer'>
                <Navbar />
            </div>
            
            {isLoading ? 
            <div className='flex h-[70vh] w-full items-center content-center'>
                <Loader />
            </div> :
            <div className='container items-center mt-14 flex flex-col'>
                <h1 className='text-3xl font-bold'>Profile</h1>
                <div className='imgContainer border border-1 h-24 w-24 my-14 rounded-full overflow-hidden flex items-center content-center'>
                    <img src={profileImg} alt="" className='h-full w-full'></img>
                </div>
                <div>
                    <div className='w-80 text-lg mb-1'>
                        Name
                    </div>
                    <div className='border border-1 w-80 h-10 bg-slate-300 rounded-lg px-4 flex items-center font-bold'>{userData && userData.name}</div>
                </div>

                <div className='my-5'>
                    <div className='w-80 text-lg mb-1'>
                        Email
                    </div>
                    <div className='border border-1 w-80 h-10 bg-slate-300 rounded-lg px-4 flex items-center font-bold'>{userData && userData.email}</div>
                </div>
            </div>}
        </div>
    );
};

export default Profile;