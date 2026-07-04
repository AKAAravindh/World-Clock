import { IoSearchSharp } from "react-icons/io5";
import MainLogo from "../assets/images/icons/main-logo.png";

function Header({ toggleSidebar, setSelectedTimeZone, homeTimeZone }) {
  return (
    <div className="text-sm flex px-[5%] items-center pt-8">
      {/* Main Logo */}
      <div className="flex items-center">
        <img className="w-10 aspect-square" src={MainLogo} alt="clock icon" />
        <h2 className="text-xl font-bold leading-none">TimesWorld</h2>
      </div>
      <nav className="flex ml-auto w-full justify-end">
        {/* <div className="bg-white outline-0 border-0 flex items-center gap-2 rounded-full pl-2 mr-[10%] h-min overflow-hidden">
          <label htmlFor="main-search" className="cursor-pointer w-full h-5">
            <IoSearchSharp size={20} />
          </label>

          <input
            id="main-search"
            type="search"
            placeholder="Search..."
            className="h-8 flex-1 outline-none"
          />
        </div> */}
        <div className="flex gap-6 text-gray-950">
          <button
            className="cursor-pointer"
            onClick={() => setSelectedTimeZone(homeTimeZone)}
          >
            Current Timezone
          </button>
          <button
            className="bg-gray-950 text-gray-50 px-4 py-1.75 rounded-full cursor-pointer"
            onClick={toggleSidebar}
          >
            All Timezones
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
