// eslint-disable-next-line react/prop-types
const NigachuPrices = () => {
  return (
    <div className="flex flex-col p-4 pt-0">
      {/* Row 1 */}
      <div className="flex items-center justify-between">
        <div className="text-left text-white">
          <span className="orange-gradient text-2xl font-normal font-['Covered By Your Grace']">
            presale price
          </span>
        </div>
        <div className="orange-gradient text-right text-white">
          <span className="text-right text-[#fff8f8] text-2xl font-normal font-['Covered By Your Grace']">
            0.00485
          </span>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex items-center justify-between mt-2">
        <div className="text-left text-white">
          <span className="yellow-gradient text-white text-2xl font-normal font-['Covered By Your Grace']">
            launch price
          </span>
        </div>
        <div className="yellow-gradient text-right text-white">
          <span className="text-right text-white text-2xl font-normal font-['Covered By Your Grace']">
            0.01
          </span>
        </div>
      </div>
    </div>
  );
};

export default NigachuPrices;
