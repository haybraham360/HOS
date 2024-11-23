import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/logo.png';
import dashboard from '/icons/dashboard_dark.png';
import add_drivers from '/icons/add_drivers.png';
import add_drivers_blue from '/icons/add_drivers_blue.png';
import logout from '/icons/logout.png';
import video1 from '/images/video1.png';
import play from '/icons/play.png';
import ebook2 from '/images/ebook2.png';

export const Contentmanagement = () => {
    const [open, setOpen ] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null)

    const handleClickOutsideDropdown =(e:any)=>{
        if(open && !dropdownRef.current?. contains(e.target as Node)){
            setOpen(false)
            }
        }
        
    window.addEventListener("click",handleClickOutsideDropdown)

  return (
    <div>
        <div className='lg:w-21 lg:h-40 border'>
        <img src={logo} alt="image" className="absolute ml-4 lg:mt-0 lg:w-15 lg:ml-6 sm:w-9 sm:-ml-2 sm:-pt-0"/>

        <div>
        <Link to="/superadmindashboard"><div className='flex lg:flex-row lg:mt-11 lg:ml-6.3 lg:w-16 items-center gap-2 rounded hover:bg-gray-light hover:p-1.5 hover:rounded cursor-pointer'>
                <img src={dashboard} alt="" className="relative size-4"/>
                <h3 className='relative text-dark lg:text-base lg:font-medium'>Dashboard</h3>
            </div></Link>

            <Link to="/usermanagement"><div className='flex lg:flex-row lg:mt-6.3 lg:ml-6.3 lg:w-16 items-center gap-2  hover:bg-gray-light hover:p-1.5 hover:rounded'>
                <img src={add_drivers} alt="" className="relative size-4"/>
                <h3 className='relative text-dark lg:text-md lg:font-medium'>User Management</h3>
            </div></Link>

            <div className='flex lg:flex-row lg:mt-6.3 lg:ml-6.3 lg:w-17 lg:bg-gray-light p-2 items-center gap-2 cursor-pointer'>
                <img src={add_drivers_blue} alt="" className="relative size-4"/>
                <h3 className='relative text-blue lg:text-md lg:font-bold'>Content Management</h3>
            </div>

            <Link to="/advertisementmanagement"><div className='flex lg:flex-row lg:mt-6.3 lg:ml-6.3 lg:w-19.2 items-center gap-2 hover:bg-gray-light hover:p-1.5 hover:rounded cursor-pointer'>
                <img src={add_drivers} alt="" className="relative size-4"/>
                <h3 className='relative text-dark lg:text-md lg:font-medium'>Advertisement Management</h3>
            </div></Link>

            <Link to="/financials"><div className='flex lg:flex-row lg:mt-6.3 lg:ml-6.3 lg:w-16 items-center gap-2 hover:bg-gray-light hover:p-1.5 hover:rounded cursor-pointer'>
                <img src={add_drivers} alt="" className="relative size-4"/>
                <h3 className='relative text-dark lg:text-md lg:font-medium'>Financials</h3>
            </div></Link>

            <div ref={dropdownRef} className='flex lg:flex-row lg:mt-6.3 lg:ml-6 lg:w-16 items-center gap-2 hover:bg-gray-light hover:p-1.5 hover:rounded p-2 cursor-pointer'>
                <img src={add_drivers} alt="" className="relative size-4"/>
                <h3 onClick={() => setOpen(true)} className='relative text-dark lg:text-md lg:font-medium'>Create content</h3>
                { open && (
                    <div className='absolute lg:mt-17 lg:ml-5 bg-gray lg:w-15 lg:h-15 rounded z-10'>
                        <Link to="/uploadingbook"><div className='relative lg:mt-1 lg:ml-5 lg:text-sm lg:font-medium lg:text-left lg:text-dark hover:text-gray-light'>Upload book </div></Link>
                        <Link to="/uploadingvideo"><div className='relative lg:mt-2 lg:ml-5 lg:text-sm lg:font-medium lg:text-left lg:text-dark hover:text-gray-light'>Upload course</div></Link>
                        <Link to="/writeblog"><div className='relative lg:mt-2 lg:ml-5 lg:text-sm lg:font-medium lg:text-left lg:text-dark hover:text-gray-light'>Write blog</div></Link>
                        <div className='relative lg:mt-2 lg:ml-5 lg:text-sm lg:font-medium lg:text-left lg:text-dark hover:text-gray-light'>Upload whitepaper</div>
                        <div className='relative lg:mt-2 lg:ml-5 lg:text-sm lg:font-medium lg:text-left lg:text-dark hover:text-gray-light'>Upload media kit</div>
                    </div>
                )}
            </div>

            <div className='flex lg:flex-row lg:mt-13 lg:ml-6.5 items-center gap-2 lg:h-6 lg:w-16 lg:rounded lg:bg-light-blue lg:hover:bg-blue'>
                <button className="absolute lg:text-white lg:font-semibold lg:text-base lg:pl-9">Sign out</button>
                <img src={logout} alt="" className="absolute size-4 lg:ml-6"/>
            </div>
        </div>
        </div>

        <div>
            <div className='relative lg:-mt-31 lg:ml-25 lg:w-25 lg:h-18 lg:mb-15 bg-white shadow-md'>
                <div className='absolute lg:h-8 lg:w-22.2 bg-green-light mt-4 ml-4.6 rounded'></div>
                <div className='absolute lg:h-8 lg:w-22.2 bg-green-light mt-11 ml-4.6 rounded'></div>
                <h3 className='relative text-base font-bold text-left lg:pt-16 lg:ml-4.5 cursor-pointer'>Manage Forum</h3>
                <h3 className='relative text-base font-bold text-left lg:-mt-4.5 lg:ml-20 cursor-pointer'>View All</h3>
            </div>

            <div className='relative lg:-mt-25 lg:ml-54 lg:w-25 lg:h-18 lg:mb-15 bg-white shadow-md'>
                <div className='absolute mt-4 ml-3.5 h-15 w-12 border rounded'>
                <img src={video1} alt="" className="absolute h-10 w-12 mt-0 lg:ml-0"/>
                <img src={play} alt="" className="absolute h-4 w-4 mt-4 lg:ml-7.5"/>
                <h3 className='relative text-xs mt-10.5 ml-1 text-left font-bold max-w-11'>Mastering HOS Compliance for Truckers</h3>
                <h3 className='relative text-xs mt-4 ml-1 text-left font-bold'>Course</h3>
                </div>
                <div>
                <img src={ebook2} alt="" className="absolute h-15 w-12 mt-4 lg:ml-14.5"/>
                <h3 className='absolute text-xs mt-12 text-white ml-15 text-left font-bold max-w-11'>Hours of Service Guidelines</h3>
                <h3 className='absolute text-xs text-white mt-15.3 ml-15 text-left font-bold'>Book</h3>
                </div>
                <Link to="/creatordashboard"><h3 className='relative text-base font-bold text-left lg:pt-16 lg:ml-4.5 cursor-pointer'>Manage Library</h3></Link>
                <h3 className='relative text-base font-bold text-left lg:-mt-4.5 lg:ml-20 cursor-pointer'>View All</h3>
            </div>
        </div>
    </div>
  )
}