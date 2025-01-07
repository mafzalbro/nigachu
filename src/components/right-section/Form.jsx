import { useState } from "react";
import Cards from "./Cards";
import NigachuPrices from "./NigachuPrices";

const Form = () => {
  const [userPublicAddress, setUserPublicAddress] = useState("");

  // Function to generate referral link and copy to clipboard
  const generateReferralLink = () => {
    if (!userPublicAddress) {
      alert("Please connect your wallet to generate a referral link.");
      return;
    }

    const referralLink = `${window.location.host}?ref=${userPublicAddress}`;
    navigator.clipboard
      .writeText(referralLink)
      .then(() => {
        alert("Link copied: " + referralLink);
      })
      .catch(() => {
        alert("Failed to copy the referral link.");
      });
  };

  return (
    <div className="form p-4 w-full lg:w-[600px] lg:h-[625.67px]">
      <div className="sm:w-10/12 sm:max-w-screen-sm mx-auto !relative bg-gradient-to-b from-[#353535] to-black rounded-[39px] border-[3px] border-white bg-white covered-by-your-grace-light">
        <div className="gif absolute -top-[190px] sm:-top-[140px] lg:-top-[200px] left-[50%] transform -translate-x-[50%] lg:h-[246.26px] lg:w-[246.26px] sm:w-1/2 h-auto -z-10">
          <img
            src="nigha-eating.gif"
            alt="left-hero-title"
            className="sm:w-full h-auto"
          />
        </div>
        <div className="title text-center text-6xl covered-by-your-grace-regular my-6">
          <h2>buy $nigachu</h2>
        </div>

        {/* Progress Section */}

        {/* <ProgressBar percentage={30} /> */}

        {/* NigachuPrices */}
        <NigachuPrices />

        {/* Cards Button */}
        <Cards setUserPublicAddress={setUserPublicAddress} />

        <div className="mx-auto w-2/3 my-4">
          <img src="separator.svg" alt="separator" />
        </div>

        {/* Actions Section */}
        <div className="mx-auto my-2 text-base sm:text-lg px-2">
          <div
            onClick={generateReferralLink}
            className="bg-neutral-700 cursor-pointer rounded-[51px] border text-center py-2 border-white w-full sm:h-[40.83px] sm:w-[223.45px] sm:mx-auto"
          >
            Generate Referral Link
          </div>
          <div className="pt-2 sm:mx-auto sm:w-11/12">
            <label className="text-left pt-4" htmlFor="sol-address">
              Your SOL Address
            </label>
            <input
              id="sol-address"
              className="bg-neutral-700 rounded-[51px] w-full border p-2 border-white sm:h-[40.83px]"
              value={userPublicAddress}
              onChange={(e) => setUserPublicAddress(e.target.value)}
              disabled
            />
            <div className="text-center pt-1 sm:text-xl">
              Get 20% of token purchased
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
