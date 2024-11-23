import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/logo.png';
import dashboard from '/icons/dashboard_dark.png';
import add_drivers from '/icons/add_drivers.png';
import add_drivers_blue from '/icons/add_drivers_blue.png';
import logout from '/icons/logout.png';
import search from '/icons/search.png';
import check_round from '/icons/check_round.png';
import edit_pen from '/icons/edit_pen.png';
import dropdown_icon_dark from '/icons/dropdown_icon_dark.png';
import fast_backward_double from '/icons/fast_backward_double.png';
import arrow_backward from '/icons/arrow_backward.png';
import fast_forward_double from '/icons/fast_forward_double.png';
import arrow_forward from '/icons/arrow_forward.png';



export const Usermanagement = () => {
    const [open, setOpen ] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null)

    const handleClickOutsideDropdown =(e:any)=>{
        if(open && !dropdownRef.current?. contains(e.target as Node)){
          setOpen(false)
          }
        }
        
    window.addEventListener("click",handleClickOutsideDropdown)

  return (
    <div className="admin-dashboard">
        <div className='lg:w-19 lg:h-40 border'>

        <div className='frame'>
        <img src={logo} alt="image" className="absolute ml-4 lg:-mt-11 lg:w-15 lg:ml-6 sm:w-9 sm:-ml-2 sm:-pt-0"/>

        <Link to="/superadmindashboard"><div className='flex lg:flex-row lg:mt-11 lg:ml-6.3 lg:w-16 items-center gap-2 rounded hover:bg-gray-light hover:p-1.5 hover:rounded cursor-pointer'>
                <img src={dashboard} alt="" className="relative size-4"/>
                <h3 className='relative text-dark lg:text-base lg:font-medium'>Dashboard</h3>
            </div></Link>

            <div className='flex lg:flex-row lg:mt-6.3 lg:ml-6.3 lg:w-16 lg:bg-gray-light p-2 items-center gap-2'>
                <img src={add_drivers_blue} alt="" className="relative size-4"/>
                <h3 className='relative text-blue lg:text-md lg:font-bold'>User Management</h3>
            </div>

            <Link to="/contentmanagement"><div className='flex lg:flex-row lg:mt-6.3 lg:ml-6.3 lg:w-17 items-center gap-2 hover:bg-gray-light hover:p-1.5 hover:rounded cursor-pointer'>
                <img src={add_drivers} alt="" className="relative size-4"/>
                <h3 className='relative text-dark lg:text-md lg:font-medium'>Content Management</h3>
            </div></Link>

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
            <div>
                <input className='absolute lg:h-6 lg:w-18 lg:-mt-30.5 lg:-ml-22 text-sm pl-6 lg:bg-gray-light rounded' placeholder='Search Drivers' />
            </div>
            <img src={search} alt="" className="absolute size-2 lg:ml-20.5 lg:-mt-29.9 z-10"/>
        </div>

        <div className='lg:-ml-5.2'>
            <div className='flex gap-7.2'>
            <img src={check_round} alt="" className="relative lg:ml-23 lg:-mt-27 size-4"/>
            <h3 className='relative text-sm text-dark font-black lg:ml-3 lg:-mt-27'>#</h3>
            <h3 className='relative text-sm text-dark font-bold lg:ml-3 lg:-mt-27'>Name</h3>
            <h3 className='relative text-sm text-dark font-bold lg:ml-3 lg:-mt-27'>Employee ID</h3>
            <h3 className='relative text-sm text-dark font-bold lg:ml-3 lg:-mt-27'>Department</h3>
            <h3 className='relative text-sm text-dark font-bold lg:-ml-1 lg:-mt-27'>Role</h3>
            <h3 className='relative text-sm text-dark font-bold lg:ml-3 lg:-mt-27'>Select Exam</h3>
            <h3 className='relative text-sm text-dark font-bold lg:ml-3 lg:-mt-27'>Communication</h3>
            <h3 className='relative text-sm text-dark font-bold lg:ml-3 lg:-mt-27'>Action</h3>
            </div>

            <div className='flex gap-7.2 lg:mt-6'>
            <div className='absolute lg:h-6 lg:w-61 lg:ml-22 lg:-mt-27.5 bg-gray-light'></div>
            <img src={check_round} alt="" className="relative lg:ml-23 lg:-mt-27 size-4"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>1</h3>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>Saadat</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-35.5 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-1 lg:-mt-27'>Saadat@gmail.com</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-45.9 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-4.5 lg:-mt-27'>Operations</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-51.8 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-0.5 lg:-mt-27'>Super admin</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-59.2 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-5 lg:-mt-27'>Exam 1</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-64 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-6.3 lg:-mt-27'>Email</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-74 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-7 lg:-mt-27'>Delete</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-80.5 lg:-mt-27.1 size-4.5"/>
            </div>

            <div className='flex gap-7.2 lg:mt-6'>
            <div className='absolute lg:h-6 lg:w-61 lg:ml-22 lg:-mt-27.5 bg-gray-lighter'></div>
            <img src={check_round} alt="" className="relative lg:ml-23 lg:-mt-27 size-4"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>1</h3>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>Saadat</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-35.5 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-1 lg:-mt-27'>Saadat@gmail.com</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-45.9 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-4.5 lg:-mt-27'>Operations</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-51.8 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-0.5 lg:-mt-27'>Super admin</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-59.2 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-5 lg:-mt-27 pl-0.3'>Exam 1</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-64 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-6.3 lg:-mt-27'>Email</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-74 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-7 lg:-mt-27'>Delete</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-80.5 lg:-mt-27.1 size-4.5"/>
            </div>

            <div className='flex gap-7.2 lg:mt-6'>
            <div className='absolute lg:h-6 lg:w-61 lg:ml-22 lg:-mt-27.5 bg-gray-light'></div>
            <img src={check_round} alt="" className="relative lg:ml-23 lg:-mt-27 size-4"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>1</h3>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>Saadat</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-35.5 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-1 lg:-mt-27'>Saadat@gmail.com</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-45.9 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-4.5 lg:-mt-27'>Operations</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-51.8 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-0.5 lg:-mt-27'>Super admin</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-59.2 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-5 lg:-mt-27 pl-0.2'>Exam 1</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-64 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-6.3 lg:-mt-27'>Email</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-74 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-7 lg:-mt-27'>Delete</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-80.5 lg:-mt-27.1 size-4.5"/>
            </div>

            <div className='flex gap-7.2 lg:mt-6'>
            <div className='absolute lg:h-6 lg:w-61 lg:ml-22 lg:-mt-27.5 bg-gray-lighter'></div>
            <img src={check_round} alt="" className="relative lg:ml-23 lg:-mt-27 size-4"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>1</h3>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>Saadat</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-35.5 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-1 lg:-mt-27'>Saadat@gmail.com</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-45.9 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-4.5 lg:-mt-27'>Operations</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-51.8 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-0.5 lg:-mt-27'>Super admin</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-59.2 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-5 lg:-mt-27 pl-0.2'>Exam 1</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-64 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-6.3 lg:-mt-27'>Email</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-74 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-7 lg:-mt-27'>Delete</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-80.5 lg:-mt-27.1 size-4.5"/>
            </div>

            <div className='flex gap-7.2 lg:mt-6'>
            <div className='absolute lg:h-6 lg:w-61 lg:ml-22 lg:-mt-27.5 bg-gray-light'></div>
            <img src={check_round} alt="" className="relative lg:ml-23 lg:-mt-27 size-4"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>1</h3>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>Saadat</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-35.5 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-1 lg:-mt-27'>Saadat@gmail.com</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-45.9 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-4.5 lg:-mt-27'>Operations</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-51.8 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-0.5 lg:-mt-27'>Super admin</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-59.2 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-5 lg:-mt-27 pl-0.2'>Exam 1</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-64 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-6.3 lg:-mt-27'>Email</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-74 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-7 lg:-mt-27'>Delete</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-80.5 lg:-mt-27.1 size-4.5"/>
            </div>

            <div className='flex gap-7.2 lg:mt-6'>
            <div className='absolute lg:h-6 lg:w-61 lg:ml-22 lg:-mt-27.5 bg-gray-lighter'></div>
            <img src={check_round} alt="" className="relative lg:ml-23 lg:-mt-27 size-4"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>1</h3>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>Saadat</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-35.5 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-1 lg:-mt-27'>Saadat@gmail.com</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-45.9 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-4.5 lg:-mt-27'>Operations</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-51.8 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-0.5 lg:-mt-27'>Super admin</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-59.2 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-5 lg:-mt-27 pl-0.2'>Exam 1</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-64 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-6.3 lg:-mt-27'>Email</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-74 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-7 lg:-mt-27'>Delete</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-80.5 lg:-mt-27.1 size-4.5"/>
            </div>

            <div className='flex gap-7.2 lg:mt-6'>
            <div className='absolute lg:h-6 lg:w-61 lg:ml-22 lg:-mt-27.5 bg-gray-light'></div>
            <img src={check_round} alt="" className="relative lg:ml-23 lg:-mt-27 size-4"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>1</h3>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>Saadat</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-35.5 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-1 lg:-mt-27'>Saadat@gmail.com</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-45.9 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-4.5 lg:-mt-27'>Operations</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-51.8 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-0.5 lg:-mt-27'>Super admin</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-59.2 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-5 lg:-mt-27 pl-0.2'>Exam 1</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-64 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-6.3 lg:-mt-27'>Email</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-74 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-7 lg:-mt-27'>Delete</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-80.5 lg:-mt-27.1 size-4.5"/>
            </div>

            <div className='flex gap-7.2 lg:mt-6'>
            <div className='absolute lg:h-6 lg:w-61 lg:ml-22 lg:-mt-27.5 bg-gray-lighter'></div>
            <img src={check_round} alt="" className="relative lg:ml-23 lg:-mt-27 size-4"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>1</h3>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>Saadat</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-35.5 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-1 lg:-mt-27'>Saadat@gmail.com</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-45.9 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-4.5 lg:-mt-27'>Operations</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-51.8 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-0.5 lg:-mt-27'>Super admin</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-59.2 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-5 lg:-mt-27 pl-0.2'>Exam 1</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-64 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-6.3 lg:-mt-27'>Email</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-74 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-7 lg:-mt-27'>Delete</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-80.5 lg:-mt-27.1 size-4.5"/>
            </div>

            <div className='flex gap-7.2 lg:mt-6'>
            <div className='absolute lg:h-6 lg:w-61 lg:ml-22 lg:-mt-27.5 bg-gray-light'></div>
            <img src={check_round} alt="" className="relative lg:ml-23 lg:-mt-27 size-4"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>1</h3>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>Saadat</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-35.5 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-1 lg:-mt-27'>Saadat@gmail.com</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-45.9 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-4.5 lg:-mt-27'>Operations</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-51.8 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-0.5 lg:-mt-27'>Super admin</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-59.2 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-5 lg:-mt-27 pl-0.2'>Exam 1</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-64 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-6.3 lg:-mt-27'>Email</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-74 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-7 lg:-mt-27'>Delete</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-80.5 lg:-mt-27.1 size-4.5"/>
            </div>

            <div className='flex gap-7.2 lg:mt-6'>
            <div className='absolute lg:h-6 lg:w-61 lg:ml-22 lg:-mt-27.5 bg-gray-lighter'></div>
            <img src={check_round} alt="" className="relative lg:ml-23 lg:-mt-27 size-4"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>1</h3>
            <h3 className='relative text-sm text-dark font-normal lg:ml-3 lg:-mt-27'>Saadat</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-35.5 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-1 lg:-mt-27'>Saadat@gmail.com</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-45.9 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-4.5 lg:-mt-27'>Operations</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-51.8 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-0.5 lg:-mt-27'>Super admin</h3>
            <img src={edit_pen} alt="" className="absolute lg:ml-59.2 lg:-mt-27 size-2.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:-ml-5 lg:-mt-27 pl-0.2'>Exam 1</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-64 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-6.3 lg:-mt-27'>Email</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-74 lg:-mt-27.1 size-4.5"/>
            <h3 className='relative text-sm text-dark font-normal lg:ml-7 lg:-mt-27'>Delete</h3>
            <img src={dropdown_icon_dark} alt="" className="absolute lg:ml-80.5 lg:-mt-27.1 size-4.5"/>
            </div>
        </div>

        <div>
            <div className='flex lg:ml-47 gap-3'>
            <img src={fast_backward_double} alt="" className="relative lg:-mt-22 size-4.5 h-4.5 w-4.5 bg-gray-light cursor-pointer"/>
            <img src={arrow_backward} alt="" className="relative lg:-mt-22 size-4.5 h-4.5 w-4.5 bg-gray-light cursor-pointer"/>
            <h3 className="relative lg:-mt-22 size-4.5 h-4.5 w-4.5 bg-blue text-white text-sm p-0.1">1</h3>
            <img src={arrow_forward} alt="" className="relative lg:-mt-22 size-4.5 h-4.5 w-4.5 bg-gray-light cursor-pointer"/>
            <img src={fast_forward_double} alt="" className="relative lg:-mt-22 size-4.5 h-4.5 w-4.5 bg-gray-light cursor-pointer"/>
            </div>
        </div>
    </div>
  )
}