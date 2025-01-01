import { useState } from "react";
import BuyButton from "../buy/BuyButton";

const Cards = () => {
  const [solAmount, setSolAmount] = useState("0.00"); // Input for SOL
  const [nigachuValue, setNigachuValue] = useState("0.00"); // Calculated Nigachu value

  // Conversion rate
  const conversionRate = 187 / 0.00485;

  // Handle SOL input changes
  const handleSolChange = (e) => {
    const solInput = parseFloat(e.target.value) || 0; // Read the input value
    setSolAmount(solInput.toFixed(2)); // Update the SOL value

    const convertedValue = solInput * conversionRate; // Calculate Nigachu
    setNigachuValue(convertedValue.toFixed(5)); // Update Nigachu value to 5 decimal places
  };

  return (
    <>
      <div className="flex flex-col gap-6 p-4">
        {/* SOL Card */}
        <div className="bg-gradient-to-r to-[#0000002D] from-[#ffffff2d] border border-white flex justify-between items-center py-2 px-3 mx-4 h-[75.70px]">
          <div className="flex justify-center items-center gap-2">
            <img className="rounded-full" src="sol.svg" alt="SOL" />
            <div className="text-white text-[32px] font-normal covered-by-your-grace-regular">
              SOL
            </div>
          </div>
          {/* SOL input */}
          <input
            type="text"
            className="text-right text-white text-[32px] font-normal covered-by-your-grace-regular bg-transparent border-none outline-none"
            autoFocus
            value={solAmount}
            onChange={handleSolChange}
          />
        </div>

        {/* Nigachu Card */}
        <div className="bg-gradient-to-r to-[#0000002D] from-[#ffffff2d] border border-white flex justify-between items-center py-2 px-3 mx-4 h-[75.70px]">
          <div className="flex justify-center items-center gap-2">
            <img className="rounded-full" src="nighachu.svg" alt="Nigachu" />
            <div className="text-white text-[32px] font-normal covered-by-your-grace-regular">
              NIGACHU
            </div>
          </div>
          {/* Dynamic Nigachu value */}
          <div className="text-right text-white text-[32px] font-normal covered-by-your-grace-regular">
            {nigachuValue}
          </div>
        </div>
      </div>

      {/* Buy Button */}
      <BuyButton
        solAmount={parseFloat(solAmount)}
        nigachuValue={nigachuValue}
      />
    </>
  );
};

export default Cards;
