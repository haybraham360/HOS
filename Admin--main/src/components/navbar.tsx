import { useLocation } from "react-router-dom";
import search from '/icons/search.png';
import dropdown_icon_dark from '/icons/dropdown_icon_dark.png';


export const Navbar = () => {

  const { pathname } = useLocation();

  if (pathname === "/") return null;
  if (pathname === "/faq") return null;
  if (pathname === "/adminsignup") return null;
  if (pathname === "/superadmindashboard") return null;
  if (pathname === "/usermanagement") return null;
  if (pathname === "/contentmanagement") return null;
  if (pathname === "/advertisementmanagement") return null;
  if (pathname === "/financials") return null;
  if (pathname === "/writeblog") return null;
  if (pathname === "/uploadingbook") return null;
  if (pathname === "/uploadingvideo") return null;
  if (pathname === "/editor") return null;

  return (
    <div className="navbar">
  

      <div>
        <div>
          <input className='relative text-dark lg:h-6 lg:w-18 lg:-mt-2 lg:-ml-5 text-sm pl-6 lg:bg-gray-light rounded' placeholder='Search Reports' />
        </div>
        <img src={search} alt="" className="absolute size-2 lg:-ml-1.5 lg:-mt-4.6 z-10" />
      </div>

      <div>
        <h3 className="relative text-dark font-normal lg:-mt-0.5 lg:-ml-22 p-2 text-left lg:h-6 lg:w-15 border rounded">
          Date Filter
        </h3>
        <img src={dropdown_icon_dark} alt="" className="absolute size-4 lg:-ml-17 lg:-mt-5 z-10" />
      </div>

      <div>
        <h3 className="relative text-dark font-normal lg:-mt-0.5 lg:-ml-34 p-2 text-left lg:h-6 lg:w-15 rounded border">
          Other Filters
        </h3>
        <img src={dropdown_icon_dark} alt="" className="absolute size-4 lg:-ml-25.7 lg:-mt-5 z-10" />
      </div>
    </div>
  )
}