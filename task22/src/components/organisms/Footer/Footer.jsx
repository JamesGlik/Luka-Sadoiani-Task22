import FyloWhite from '../../../assets/Group 4.svg';
import Phone from '../../../assets/Phone.png';
import Email from '../../../assets/Email.svg';
import Facebook from '../../../assets/Facebook.svg';
import Twitter from '../../../assets/Twitter.svg';
import Instagram from '../../../assets/Instagram.svg';

const Footer = () => {
  return (
    <div className="container mx-auto px-4 w-full h-[391px] bg-[#07043B]">
      <div className="max-w-[1440px] w-full pl-[80px] pr-[80px] pt-[130px]">
        <div className="mb-8">
          <img src={FyloWhite} alt="Fylo Logo" />
        </div>
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center mb-4">
              <img src={Phone} alt="Phone" className="w-[24px] h-[24px]" />
              <h3 className="text-[#FFFFFF] text-[16px] font-[400] ml-4 cursor-pointer">
                Phone: +1-543-123-4567
              </h3>
            </div>
            <div className="flex items-center">
              <img src={Email} alt="Email" className="w-[24px] h-[24px]" />
              <h3 className="text-[#FFFFFF] text-[16px] font-[400] ml-4 cursor-pointer">
                example@fylo.com
              </h3>
            </div>
          </div>
          <div className="text-[#FFFFFF] text-[16px] font-[400] space-y-2 cursor-pointer">
            <h3>About Us</h3>
            <h3>Jobs</h3>
            <h3>Press</h3>
            <h3>Blog</h3>
          </div>
          <div className="text-[#FFFFFF] text-[16px] font-[400] space-y-2 cursor-pointer">
            <h3>Contact Us</h3>
            <h3>Terms</h3>
            <h3>Privacy</h3>
          </div>
          <div className="flex space-x-4">
            <img src={Facebook} alt="Facebook" className="w-[31px] h-[31px] cursor-pointer" />
            <img src={Twitter} alt="Twitter" className="w-[31px] h-[31px] cursor-pointer" />
            <img src={Instagram} alt="Instagram" className="w-[31px] h-[31px] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;