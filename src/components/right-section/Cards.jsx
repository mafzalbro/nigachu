import { useEffect, useState } from "react";
import BuyButton from "../buy/BuyButton";

const Cards = () => {
  const solanaPrice = 0.00485;
  const [solAmount, setSolAmount] = useState("0.00");
  const [solPrice, setSolPrice] = useState("195"); // Input for SOL
  const [nigachuValue, setNigachuValue] = useState("0.00"); // Calculated Nigachu value

  // Conversion rate
  const conversionRate = solPrice / solanaPrice;

  // Handle SOL input changes
  const handleSolChange = (e) => {
    const solInput = parseFloat(e.target.value) || 0; // Read the input content

    setSolAmount(solInput);

    const convertedValue = solInput * conversionRate; // Calculate Nigachu
    setNigachuValue(convertedValue.toFixed(5)); // Update Nigachu value to 5 decimal places
  };

  // Calculate Nigachu token value based on SOL price and user input
  useEffect(() => {
    if (solPrice && solAmount) {
      const nigachu = (solPrice / 0.00875) * solAmount; // Adjust the divisor as per your tokenomics
      setNigachuValue(nigachu.toFixed(6)); // Round off to 6 decimal places
    }
  }, [solPrice, solAmount]);

  useEffect(() => {
    const fetchSolPrice = async () => {
      const cachedPrice = localStorage.getItem("solPrice");
      const cachedTime = localStorage.getItem("solPriceTimestamp");

      // If cached price is less than 1 hour old, use it
      if (cachedPrice && cachedTime && Date.now() - cachedTime < 3600000) {
        setSolPrice(parseFloat(cachedPrice));
        return;
      }

      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
        );
        const data = await response.json();

        if (data?.solana?.usd) {
          const price = data.solana.usd;
          setSolPrice(price);

          // Cache the price and timestamp in localStorage
          localStorage.setItem("solPrice", price);
          localStorage.setItem("solPriceTimestamp", Date.now());
        } else {
          throw new Error("Invalid response from price API.");
        }
      } catch (error) {
        console.error(
          "Failed to fetch SOL price. Falling back to default rate.",
          error
        );
        setSolPrice(195); // Default rate: 1 SOL = $195 USD
      }
    };

    fetchSolPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {/* Editable SOL value */}
          <input
            type="number"
            className="text-right bg-transparent w-16 text-[32px] font-normal covered-by-your-grace-regular"
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
        solPrice={parseFloat(solPrice)}
        solAmount={parseFloat(solAmount)}
        nigachuValue={nigachuValue}
      />
    </>
  );
};

export default Cards;
