import React, { useState } from "react";
import Header from './components/header';
import Aside from './components/aside';
import DashboardHome from './pages/dashboard-home';

const Dashboard = ()=>{
    const [activeTab, setActiveTab] = useState("experiencia");

    return(    
      <div className='flex flex-col text-white bg-[#000236] min-h-screen '>
        <Header />
        <div className="flex min-h-full">
          <Aside activeTab={activeTab} setActiveTab={setActiveTab} />
          <DashboardHome activeTab={activeTab} />
        </div>
      </div>
    );
}
export default Dashboard;
