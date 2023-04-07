import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/card/Card';
import { getDashboardList } from '../../api/discover';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../../components/loader/Loader';

const Home = () => {
    const [dashboardList, setDashboardList] = useState([]);
    const [filterType, setFilterType] = useState("all");
    const [isLoading, setIsLoading] = useState(false);

    async function fetchDashboards(filterType){
        setIsLoading(true);
        const list = await getDashboardList(filterType);
        setIsLoading(false);
        setDashboardList(list);
    }

    useEffect(()=>{
        fetchDashboards(filterType);
    },[filterType])


    return (
        <div className='flex flex-col h-screen w-full'>
            <div className='navbarContainer grow-0 shrink basis-auto'>
                <Navbar currentPage="home" />
            </div>
            <div className='filterContainer px-4 sm:px-8 md:px-20 lg:px-32 md:text-lg flex items-center justify-end py-1'>
                <select id="cars" name="cars" className='h-10 px-2' value={filterType} onChange={(e)=>setFilterType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="tables">Tables</option>
                    <option value="pie">Pie Chats</option>
                    <option value="line">Line Charts</option>
                </select>
            </div>
            <div className='container overflow-y-scroll grow shrink basis-auto mt-1 scrollbar-hide'>
                {isLoading ? <Loader /> :
                <div className='py-1 px-4 sm:px-8 md:px-20 lg:px-32'>
                    {dashboardList.map((dashboard, index)=>{
                        return <Card dashboard={dashboard} key={index} />
                    })}
                </div>}
            </div>
        </div>
    );
};

export default Home;