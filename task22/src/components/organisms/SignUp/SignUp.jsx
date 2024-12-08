const SignUp = () => {
  return (
    <div className="container mx-auto px-4 w-full h-[370px] bg-[#575988]">
      <div className="max-w-[1440px] w-full pl-[80px] pr-[80px] pt-[167px] relative flex justify-between">
        <div>
          <h1 className="text-[#FFFFFF] text-[32px] font-[700] mb-[20px]">
            Get early access today
          </h1>
          <p className="text-[#FFFFFF] text-[16px] font-[400]">
            It only takes a minute to sign up and our free starter tier is <br />
            extremely generous. If you have any questions, our support team <br />
            would be happy to help you.
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <input
            type="email"
            placeholder="email@example.com"
            className="text-[#C0C0C0] text-[12px] font-[400] px-4 py-2 rounded-[3px] w-[480px] h-[48px]"
          />
          <button className="text-[#FFF] text-[14px] font-[700] bg-[#2F65F8] rounded-[3px] w-[200px] h-[48px]">
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;