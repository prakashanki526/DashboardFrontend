import React, {useState} from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { verifyOTP, registerUser, userLogin } from '../api/discover';
import {toast} from 'react-hot-toast';

const VerifyOTP = (props) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#fff'
        },
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
    };

    const navigate = useNavigate();
    const [userOTP, setUserOTP] = useState("");

    async function handleVerify(e){
        e.preventDefault();
    
        const data = await verifyOTP(userOTP);
        if(data.error){
            toast.error(data.error);
            return;
        }

        
        // if(props.userData.email){
            //     props.setIsEnabledOTP(false);
        //     props.setIsSetPasswordModal(true);
        //     return;
        // }
        
        // setIsLoading(true);
        await registerUser(props.userData);
        console.log("Success");
        const loginData = await userLogin(props.userData.email,props.userData.password);
        localStorage.token = loginData.token;
        // setIsLoading(false);
        localStorage.email = props.userData.email.toLowerCase();
        navigate("/");
        toast.success(data.msg);
    }

    return (

        <Modal
        isOpen={true}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={()=>props.setIsModalOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className='flex flex-col items-center justify-center' onSubmit={handleVerify}>
            <h1 className='font-bold text-2xl'>Verify OTP</h1>
            {/* <span>Enter OTP sent to your email</span> */}
            <input onChange={(e)=> setUserOTP(e.target.value)} className='my-5 w-80 border bottom-1 border-black rounded-md px-2 h-9 md:w-80' type="text" placeholder='Enter OTP' required></input>
            <input className='bg-slate-600 px-8 py-1 rounded-lg text-white cursor-pointer h-10' type="submit" value="Verify"></input>
            <div className='flex justify-between w-80 my-5'>
                <div className='cursor-pointer hover:underline' onClick={()=>navigate('/login')}>Login</div>
                <div className='cursor-pointer hover:underline' onClick={()=>props.setIsModalOpen(false)}>Back</div>
            </div>
        </form>
      </Modal>
    );
};

export default VerifyOTP;