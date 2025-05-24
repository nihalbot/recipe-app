const { defaultHead } = require("next/head");

const Header = () => {
  return (
    <div className="w-full h-20 flex justify-between items-center px-5">
      <div className=" cursor-pointer">
        <span className=" font-bold text-2xl">
          Food <span className="text-blue-600">Lover</span>
        </span>
      </div>
      <div className=" hidden md:block">
        <ul className="flex gap-10 text-lg font-semibold text-[#2463eb] cursor-pointer">
          <li className="px-2 py-1 rounded-lg  transform transition-all duration-100 hover:bg-[#2463eb] hover:text-white">Home</li>
          <li className="px-2 py-1 rounded-lg  transform transition-all duration-100 hover:bg-[#2463eb] hover:text-white">Contact Us</li>
          <li className="px-2 py-1 rounded-lg  transform transition-all duration-100 hover:bg-[#2463eb] hover:text-white">Login</li>
          <li className="px-2 py-1 rounded-lg  transform transition-all duration-100 hover:bg-[#2463eb] hover:text-white">SignUp</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
