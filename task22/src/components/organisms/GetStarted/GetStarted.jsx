import Image1 from "../../../assets/illustration_1-01.svg";

const GetStarted = () => {
  return (
    <div className="container mx-auto px-4 w-full h-[800px]">
      <div className="max-w-[1440px] w-[100%] h-[80px] pl-[80px] pr-[80px] pt-[163px] relative">
        <h1 className="text-[#07043B] text-[40px] font-[700] pb-[15px]">
          All your files in one secure
          <br />
          location, accessible anywhere.
        </h1>
        <p className="text-[#07043B] text-[17px] font-[400]">
          Fylo stores your most important files in one secure location. Access
          <br />
          them wherever you need, share and collaborate with friends, family,
          <br />
          and co-workers.
        </p>
        <div>
          <input
            type="email"
            placeholder="Enter your email…"
            className="text-[#C2C2C2] text-[14px] font-[400] border-[2px] border-[#D1D1D1] px-4 py-2 mt-[25px] rounded-[2px] w-[320px] h-[45px]"
          />
          <button className='text-[#FFF] text-[14px] font-[700] bg-[#2F65F8] w-[200px] h-[45px] ml-[16px] ' >Get Started</button>
        </div>
        <div className="absolute right-[40px] top-[100px] z-0">
          <img src={Image1} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;