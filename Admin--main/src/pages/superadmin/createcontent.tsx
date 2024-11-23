import { Link } from 'react-router-dom';
import logo from '/images/logo.png';
import dashboard from '/icons/dashboard_dark.png';
import add_drivers from '/icons/add_drivers.png';
import add_drivers_blue from '/icons/add_drivers_blue.png';
import logout from '/icons/logout.png';

export const Createcontent = () => {
  return (
    <div>
        <div className='lg:w-21 lg:h-40 border'>
        <img src={logo} alt="image" className="absolute ml-4 lg:mt-0 lg:w-15 lg:ml-6 sm:w-9 sm:-ml-2 sm:-pt-0"/>

        <div>
        <Link to="/superadmindashboard"><div className='flex lg:flex-row lg:mt-11 lg:ml-6.3 lg:w-16 items-center gap-2 rounded hover:bg-gray-light hover:p-1.5 hover:rounded cursor-pointer'>
                <img src={dashboard} alt="" className="relative size-4"/>
                <h3 className='relative text-dark lg:text-base lg:font-medium'>Dashboard</h3>
            </div></Link>

            <Link to="/usermanagement"><div className='flex lg:flex-row lg:mt-6 lg:ml-6.3 lg:w-16 items-center gap-2  hover:bg-gray-light hover:p-1.5 hover:rounded'>
                <img src={add_drivers} alt="" className="relative size-4"/>
                <h3 className='relative text-dark lg:text-md lg:font-medium'>User Management</h3>
            </div></Link>

            <Link to="/contentmanagement"><div className='flex lg:flex-row lg:mt-6 lg:ml-6.3 lg:w-17 items-center gap-2 hover:bg-gray-light hover:p-1.5 hover:rounded cursor-pointer'>
                <img src={add_drivers} alt="" className="relative size-4"/>
                <h3 className='relative text-dark lg:text-md lg:font-medium'>Content Management</h3>
            </div></Link>

            <Link to="/advertisementmanagement"><div className='flex lg:flex-row lg:mt-6 lg:ml-6.3 lg:w-19.2 items-center gap-2 hover:bg-gray-light hover:p-1.5 hover:rounded cursor-pointer'>
                <img src={add_drivers} alt="" className="relative size-4"/>
                <h3 className='relative text-dark lg:text-md lg:font-medium'>Advertisement Management</h3>
            </div></Link>

            <div className='flex lg:flex-row lg:mt-6 lg:ml-6.3 lg:w-16 items-center gap-2 lg:bg-gray-light p-2 cursor-pointer'>
                <img src={add_drivers_blue} alt="" className="relative size-4"/>
                <h3 className='relative text-blue lg:text-md lg:font-bold'>Financials</h3>
            </div>

            <div className='flex lg:flex-row lg:mt-15 lg:ml-6.5 items-center gap-2 lg:h-6 lg:w-16 lg:rounded lg:bg-light-blue lg:hover:bg-blue'>
                <button className="absolute lg:text-white lg:font-semibold lg:text-base lg:pl-9">Sign out</button>
                <img src={logout} alt="" className="absolute size-4 lg:ml-6"/>
            </div>
        </div>
        </div>
    </div>
  )
}