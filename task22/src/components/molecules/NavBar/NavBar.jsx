import { useNavigate } from "react-router";
import Logo from "../../../assets/Group 5.svg";

const NavBar = () => {
  const navigate = useNavigate();

  const goToFeatures = () => {
    navigate('/features')
  }

  const goToTeam = () => {
    navigate('/team')
  }

  const goToSignIn = () => {
    navigate('/signin')
  }

  return (
    <div className="container mx-auto px-12 w-full h-[163px]">
      <div className="max-w-[1340px] w-full h-[80px] flex items-center justify-between z-50">
        <div>
          <img src={Logo} alt="Logo" className="w-auto h-auto max-w-[120px]" />
        </div>
        <div className="flex justify-between gap-[56px]">
          <button
            onClick={goToFeatures}
            className="text-[#07043B] text-[16px] sm:text-[12px] lg:text-[16px] font-[400] cursor-pointer flex items-center font-raleway"
          >
            Features
          </button>
          <button
            onClick={goToTeam}
            className="text-[#07043B] text-[16px] sm:text-[12px] lg:text-[16px] font-[400] cursor-pointer flex items-center font-raleway"
          >
            Team
          </button>
          <button
            onClick={goToSignIn}
            className="text-[#07043B] text-[16px] sm:text-[12px] lg:text-[16px] font-[400] cursor-pointer flex items-center font-raleway"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;