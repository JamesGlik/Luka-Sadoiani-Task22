import FyloWhite from '../../../assets/Group 4.svg';
import Phone from '../../../assets/Phone.png';
import Email from '../../../assets/Email.svg';
import Facebook from '../../../assets/Facebook.svg';
import Twitter from '../../../assets/Twitter.svg';
import Instagram from '../../../assets/Instagram.svg';



const Footer = () => {
  return (
    <div className="container mx-auto px-4 w-full h-[391px] bg-[#07043B] font-raleway">
      <div className="max-w-[1440px] w-full pl-[80px] pr-[80px] pt-[167px]">
        <div className="mb-8">
          <img src={FyloWhite} alt="Fylo Logo" />
        </div>
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center mb-4">
              <img src={Phone} alt="Phone Icon" className="w-[24px] h-[24px] cursor-pointer" />
              <h3 className="text-[#FFFFFF] text-[16px] font-[400] ml-4 cursor-pointer hover:text-[#6C9BFF]">
                Phone: +1-543-123-4567
              </h3>
            </div>
            <div className="flex items-center">
              <img src={Email} alt="Email Icon" className="w-[24px] h-[24px] cursor-pointer" />
              <h3 className="text-[#FFFFFF] text-[16px] font-[400] ml-4 cursor-pointer hover:text-[#6C9BFF]">
                example@fylo.com
              </h3>
            </div>
          </div>
          <div className="text-[#FFFFFF] text-[16px] font-[400] space-y-2 cursor-pointer">
            <h3 className="hover:text-[#6C9BFF]">About Us</h3>
            <h3 className="hover:text-[#6C9BFF]">Jobs</h3>
            <h3 className="hover:text-[#6C9BFF]">Press</h3>
            <h3 className="hover:text-[#6C9BFF]">Blog</h3>
          </div>
          <div className="text-[#FFFFFF] text-[16px] font-[400] space-y-2 cursor-pointer">
            <h3 className="hover:text-[#6C9BFF]">Contact Us</h3>
            <h3 className="hover:text-[#6C9BFF]">Terms</h3>
            <h3 className="hover:text-[#6C9BFF]">Privacy</h3>
          </div>
          <div className="flex space-x-4">
            <img src={Facebook} alt="Facebook Icon" className="w-[31px] h-[31px] cursor-pointer" />
            <img src={Twitter} alt="Twitter Icon" className="w-[31px] h-[31px] cursor-pointer" />
            <img src={Instagram} alt="Instagram Icon" className="w-[31px] h-[31px] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;