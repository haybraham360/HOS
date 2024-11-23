import logo from '/images/logo.png';
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faNewspaper, faUsersCog, faAd, faChartPie, faEdit, faSignOut, faAngleRight, faFilePdf, faPhotoVideo, faPaperclip, faFile } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
    const currentPage = window.location.pathname;
    // const dropdownRef = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState<boolean>(false);

    // const handleClickOutsideDropdown = (e: MouseEvent) => {
    //     if (open && !dropdownRef.current?.contains(e.target as Node)) {
    //         setOpen(false)
    //     };
    // }

    const checkActive = (path: string) => {
        return currentPage === path ? 'active' : '';
    }

    // window.addEventListener("click", handleClickOutsideDropdown);

    return (
        <div className="dashboard-menu">
            <div className="relative sidebar-content mt-[35px]">
                <div className="flex mb-[50px] w-full !p-[0px]">
                    <Link to="/">
                        <img src={logo} alt="image" className="w-[150px]" />
                    </Link>
                </div>
                <Link to="/dashboard" className={checkActive("/dashboard")}>
                    <div className="flex items-center gap-[15px]">
                        <FontAwesomeIcon icon={faChartLine} />
                        <span className='relative lg:text-md'>Dashboard</span>
                    </div>
                </Link>

                <Link to="/management">
                    <div className='flex items-center gap-[15px]'>
                        <FontAwesomeIcon icon={faUsersCog} />
                        <span className='relative lg:text-md'>User Management</span>
                    </div>
                </Link>

                <Link to="/content">
                    <div className='flex items-center gap-[15px]'>
                        <FontAwesomeIcon icon={faNewspaper} />
                        <span className='relative lg:text-md'>Content Management</span>
                    </div>
                </Link>

                <Link to="/advertisment">
                    <div className='flex items-center gap-[15px]'>
                        <FontAwesomeIcon icon={faAd} />
                        <span className='relative lg:text-md'>Advertisement Management</span>
                    </div>
                </Link>

                <Link to="/financials">
                    <div className='flex items-center gap-[15px]'>
                        <FontAwesomeIcon icon={faChartPie} />
                        <span className='relative lg:text-md'>Financials</span>
                    </div>
                </Link>

                <div className='relative flex-col items-center'>
                    <div className="flex items-center gap-15px justify-between" onClick={() => setOpen(!open)} >
                        <div className="flex items-center gap-[15px]">
                            <FontAwesomeIcon icon={faEdit} />
                            <span className='relative'>Create content</span>
                        </div>
                        {<FontAwesomeIcon icon={faAngleRight} className={open ? 'drop' : 'undrop' } />}
                    </div>
                    {open && (
                        <div className='dropdown mt-[20px] z-10'>
                            <div className="dropdown-content">
                                <Link to="/book/upload" className='flex items-center gap-[15px]'>
                                    <FontAwesomeIcon icon={faFilePdf} />
                                    <span>Upload book</span>
                                </Link>
                                <Link to="/courses/upload" className='flex items-center gap-[15px]'>
                                    <FontAwesomeIcon icon={faPhotoVideo} />
                                    <span>Upload Course</span>
                                </Link>
                                <Link to="/blog/new" className='flex items-center gap-[15px]'>
                                    <FontAwesomeIcon icon={faEdit} />
                                    <span>Write Blog</span>
                                </Link>
                                <Link to="/uploadingbook" className='flex items-center gap-[15px]'>
                                    <FontAwesomeIcon icon={faFile} />
                                    <span>Upload Whitepaper</span>
                                </Link>
                                <Link to="/uploadingbook" className='flex items-center gap-[15px]'>
                                    <FontAwesomeIcon icon={faPaperclip} />
                                    <span>Upload MediaKit</span>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                <Link to={"/logout"} className='logout-btn flex items-center gap-2'>
                    <FontAwesomeIcon icon={faSignOut} />
                    <span className="">Sign out</span>
                </Link>
            </div>
        </div>
    );
}

export default SideBar;