import Logo from "../../../assets/Group 5.svg";

const NavBar = () => {
  return (
    <div className='container mx-auto px-4 w-full h-[163px]'>
      <div className="max-w-[1440px] w-[100%] h-[80px] pl-[80px] pr-[80px] flex items-center justify-between  z-50">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex justify-between gap-14">
          <div
            className="text-[#07043B] text-[16px] font-[400] cursor-pointer flex items-center">
            Features
          </div>
          <div
            className="text-[#07043B] text-[16px] font-[400] cursor-pointer flex items-center">
            Team
          </div>
          <div
            className="text-[#07043B] text-[16px] font-[400] cursor-pointer flex items-center">
            Sign In
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;