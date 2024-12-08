import Social from "../../../assets/Social.png";
import Arrow from "../../../assets/Arrow.svg";
import Background from "../../../assets/Rectangle2.svg";
import Image2 from "../../../assets/illustration_2-01.svg";

const Fylo = () => {
  return (
    <div className="container mx-auto px-4 w-full h-[800px] relative">
      <div className="absolute inset-0">
        <img src={Background} alt="Background" className="w-full h-[837px] object-cover" />
      </div>

      <div className="relative z-10 max-w-[1440px] w-full h-auto px-[80px] pt-[178px] text-[#07043B]">
        <h1 className="text-[40px] font-[700] pb-[15px]">
          Stay productive, wherever you are
        </h1>
        <p className="text-[16px] font-[400] mt-[38px]">
          Never let location be an issue when accessing your files. Fylo has you <br />
          covered for all of your file storage needs.
        </p>
        <p className="text-[16px] font-[400] mt-[16px]">
          Securely share files and folders with friends, family and colleagues for <br />
          live collaboration. No email attachments required!
        </p>
        <div className="flex items-center mt-[15px]">
          <h3 className="text-[#3DA08F] text-[16px] font-[400] cursor-pointer">
            See how Fylo works
          </h3>
          <img src={Arrow} alt="Arrow" className="ml-2" />
        </div>
        <div className="w-[166px] border-b-[#3DA08F] border-b-[1px] mt-[4px]"></div>

        <div className="mt-[45px]">
          <img src={Social} alt="Social" className="w-auto h-auto ml-[-20px]" />
        </div>
        <div className="absolute right-[40px] top-[202px] z-0">
          <img src={Image2} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Fylo;