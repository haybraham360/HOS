// import { Link } from 'react-router-dom';
import line from '/images/homeline.png';
import SideBar from '../../components/SideBar';
import FeedbackChart from '../../graphs/FeedbackChart';
import PerformanceChart from '../../graphs/PerformanceChart';

export const Superadmindashboard = () => {
    return (
        <div className="admin-dashboard">
            <SideBar />
            <div className='ml-20 mt-[110px] w-[72vw]'>
                <div className="flex gap-[22px] h-[5.5rem] mb-4">
                    <div className="flex flex-col items-start justify-between bg-white w-1/3 rounded-[5px] shadow-md p-[13px]">
                        <h4 className='text-[0.82rem] font-semibold text-gray '>Total number of Drivers</h4>
                        <h3 className='text-[1.7rem] font-semibold text-dark opacity-85'>348</h3>
                    </div>
                    <div className="flex flex-col items-start justify-between bg-white w-1/3 rounded-[5px] shadow-md p-[13px]">
                        <h4 className='text-[0.82rem] font-semibold text-gray '>Total courses purchashed</h4>
                        <div className="flex justify-between w-full items-end">
                            <h3 className='text-[1.7rem] font-semibold text-dark opacity-85'>348</h3>
                            <h4 className='text-[0.95rem] font-semibold pb-1 text-green'>$7,548</h4>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-between bg-white w-1/3 rounded-[5px] shadow-md p-[13px]">
                        <h4 className='text-[0.82rem] font-semibold text-gray '>Total number of feedbacks received</h4>
                        <h3 className='text-[1.7rem] font-semibold text-dark opacity-85'>34</h3>
                    </div>
                </div>
                <div className="flex gap-3 h-[17rem] mb-4">
                    <div className="flex flex-col items-start bg-white w-[40%] p-[13px] rounded-[8px] shadow-md">
                        <h4 className='text-[0.82rem] font-semibold text-gray '>Performance metrics</h4>
                        <div className='w-full'>
                            <PerformanceChart />
                        </div>
                    </div>
                    <div className="flex flex-col items-start bg-white w-[60%] rounded-[8px] p-[13px] shadow-md">
                        <h4 className='text-[0.82rem] font-semibold text-gray '>Feedback metrics</h4>
                        <div className='w-full'>
                            <FeedbackChart />
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 h-[13rem] mb-4">
                    <div className="flex bg-white w-[40%] rounded-[8px] shadow-md"></div>
                    <div className="flex h-full w-[60%] gap-3">
                        <div className="flex bg-white w-[32%] h-full rounded-[8px] shadow-md"></div>
                        <div className="flex bg-white w-[68%] h-full rounded-[8px] shadow-md"></div>
                    </div>
                </div>
                <div className="flex gap-3 h-[13rem] mb-4">
                    <div className="flex bg-white w-[40%] rounded-[8px] shadow-md"></div>
                    <div className="flex bg-white w-[60%] rounded-[8px] shadow-md"></div>
                </div>
            </div>
            <div className='relative lg:mt-[36rem] lg:-ml-5'>
                <div>
                    <h3 className='absolute lg:-mt-5.3 lg:ml-25 text-dark lg:text-base lg:font-bold z-50'>Revenue</h3>
                </div>
                <div>
                    <div className='relative lg:-mt-30 lg:ml-25 lg:w-55 lg:h-19.5 bg-white shadow-md'></div>
                </div>
                <div>
                    <div className='relative lg:mt-8 lg:ml-25 lg:w-25 lg:h-22 lg:mb-15 bg-white shadow-md'>
                        <h3 className='relative text-dark lg:pt-6 lg:-ml-16 lg:text-medium'>Revenue Breakdown</h3>
                        <img src={line} className="absolute ml-6.2 w-20.8 lg:w-70 lg:mt-10 lg:-ml-0.1 h-0.1 xl:w-75.5" alt="home line" />
                    </div>
                </div>
                <div>
                    <div className='relative lg:-mt-32 lg:ml-55 lg:w-25 lg:h-19.5 lg:mb-15 bg-white shadow-md'>
                        <h3 className='relative text-dark lg:pt-6 lg:-ml-16 lg:text-medium'>Customer Acquisition</h3>
                        <img src={line} className="absolute ml-6.2 w-20.8 lg:w-70 lg:mt-8 lg:-ml-0.1 h-0.1 xl:w-75.5" alt="home line" />
                    </div>
                </div>
            </div>
        </div>
    )
}