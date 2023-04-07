import React from 'react';

const Card = (props) => {
    return (
        <div className='flex flex-col mb-4 md:flex-row shadow-md'>
            <div className='imgContainer h-64 w-full md:p-2 lg:p-4 md:h-72 lg:pr-8'>
                <img src={props.dashboard.imgUrl} alt='' className='h-full w-full'></img>
            </div>
            <div className='contentContainer h-fit w-full py-2 md:p-2 px-1'>
                <h1 className='text-[26px] font-bold'>{props.dashboard.name}</h1>
                <div className='my-2 md:text-lg'>{props.dashboard.content}</div>
                <button className= 'text-white my-3 px-4 py-1 text-lg rounded-3xl bg-red-800 hover:shadow-lg hover:-translate-y-1'>Get This Dashboard</button>
            </div>
        </div>
    );
};

export default Card;