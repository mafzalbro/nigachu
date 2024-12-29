const Cards = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-gradient-to-r to-[#0000002D] from-[#ffffff2d] border border-white flex justify-between items-center py-2 px-3 mx-4 h-[75.70px]">
        <div className="flex justify-center items-center gap-2">
          <img className="rounded-full" src="sol.svg" />
          <div className="text-white text-[32px] font-normal covered-by-your-grace-regular">
            SOL
          </div>
        </div>
        <div className="text-right text-white text-[32px] font-normal covered-by-your-grace-regular">
          0.00
        </div>
      </div>

      <div className="bg-gradient-to-r to-[#0000002D] from-[#ffffff2d] border border-white flex justify-between items-center py-2 px-3 mx-4 h-[75.70px]">
        <div className="flex justify-center items-center gap-2">
          <img className="rounded-full" src="nighachu.svg" />
          <div className="text-white text-[32px] font-normal covered-by-your-grace-regular">
            NIGACHU
          </div>
        </div>
        <div className="text-right text-white text-[32px] font-normal covered-by-your-grace-regular">
          0.00
        </div>
      </div>
    </div>
  );
};

export default Cards;
