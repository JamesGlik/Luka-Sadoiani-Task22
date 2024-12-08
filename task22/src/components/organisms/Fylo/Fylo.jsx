import Image1 from "../../../assets/Rectangle.svg";

const Fylo = () => {
  return (
    <div className="container mx-auto px-4 w-full h-full">
      <div className="max-w-[1440px] w-[100%] h-[80px] pl-[80px] pr-[80px] relative">
        <h1 className="text-[#07043B] text-[40px] font-[700] pb-[15px]">
          Stay productive, wherever you are
        </h1>
        <p className="text-[#07043B] text-[16px] font-[400]">
          Never let location be an issue when accessing your files. Fylo has you <br></br> covered for all of your file storage needs.
        </p>
        <p className="text-[#07043B] text-[16px] font-[400]">
          Securely share files and folders with friends, family and colleagues for <br></br> live collaboration. No email attachments required!
        </p>
        <div>
          <img src={Image1} alt="Logo" className="absolute right-[0px] z-0" />
        </div>
      </div>
    </div>
  );
};

export default Fylo;