const ClaimDeal = () => {
  return (
    <div className="flex justify-center mt-32 sm:h-[400px] relative z-10">
      <div className="text-white w-full covered-by-your-grace-light">
        <div className="w-full sm:w-8/12 sm:mx-auto h-full relative bg-black">
          {/* Title Section */}
          <div className="text-center absolute z-0 -top-24 text-[#f2454b] text-9xl font-normal font-['Covered By Your Grace'] mb-8 w-full">
            Claim tokens
          </div>

          {/* Inner Box */}
          <div className="w-full bg-gradient-to-b from-[#353535] to-black rounded-[39px] border-4 border-white shadow-[0_4px_40px_20px_rgba(0,0,0,1)] sm:p-4 absolute">
            {/* Content inside the box */}
            <div className="text-white text-[32px] font-normal font-['Covered By Your Grace'] text-center">
              Connect your wallet to claim the token
            </div>
            <div className="text-white text-[32px] font-normal font-['Covered By Your Grace'] mb-4 text-center">
              You can claim your tokens when the presale will end
            </div>

            {/* Claim Button */}
            <div className="mx-auto w-[722px] h-[77px]">
              <button
                className="w-full h-full bg-[#ec5c5b] text-[#ffffff] text-5xl font-normal font-['Covered By Your Grace'] rounded-[33px] border border-[#ec5c5b] shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:bg-[#ea4d4e] transition-colors  text-red-500 text-5xl whitespace-nowrap"
                style={{
                  textShadow:
                    "1px 0px 2px rgba(255, 255, 255, 0.5), 2px 0px 4px rgba(0, 255, 0, .6)",
                  backgroundImage:
                    "radial-gradient(circle at left, #9a2929 0%, black 70%)",
                }}
              >
                Claim Tokens
              </button>
            </div>
            <div className="text-[#787878] text-[32px] font-normal font-['Covered By Your Grace'] text-center mt-4">
              Join our Telegram group for support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimDeal;
