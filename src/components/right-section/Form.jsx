import Cards from "./Cards";
import NigachuPrices from "./NigachuPrices";
// import ProgressBar from "./ProgressBar";

const Form = () => {
  return (
    <div className="form p-4 w-full sm:w-[600px] sm:h-[625.67px]">
      <div className="sm:w-10/12 sm:max-w-screen-sm mx-auto !relative bg-gradient-to-b from-[#353535] to-black rounded-[39px] border-[3px] border-white bg-white covered-by-your-grace-light">
        <div className="gif absolute -top-[140px] sm:-top-[200px] left-[50%] transform -translate-x-[50%] sm:h-[246.26px] sm:w-[246.26px] w-1/3 -z-10">
          <img
            src="nigha-eating.gif"
            alt="left-hero-title"
            className="w-full h-full"
          />
        </div>
        <div className="title text-center text-6xl covered-by-your-grace-regular my-6">
          <h2>buy $nigachu</h2>
        </div>
        {/* TODO: Progress Section */}

        {/* <ProgressBar percentage={30} /> */}

        {/* NigachuPrices */}

        <NigachuPrices />

        {/* Cards Button */}
        <Cards />

        {/* Buy Button */}
        <div
          className="mx-auto p-2 m-3 flex justify-center items-center gap-2 border border-[#ec5c5b] cursor-pointer sm:h-[46.51px] sm:w-[283.65px] w-1/2"
          style={{
            backgroundImage:
              "radial-gradient(circle at left, #9a2929 0%, black 70%)",
          }}
        >
          <div className="sm:w-[32.71px] h-7">
            <img
              src="melon-left.png"
              alt="melon-left"
              className="h-full w-full"
            />
          </div>
          <div className="sm:w-[64.76px] w-1/2 sm:h-[36.48px]">
            <img
              src="buy-btn-text.png"
              alt="buy-btn-text"
              className="h-full w-full"
            />
          </div>
          {/* <div
            className="text-red-500 text-4xl w-[64.76px] sm:h-[36.48px]"
            style={{ textShadow: "2px 0px 4px rgba(0, 255, 0, 1)" }}
          >
            Buy
          </div> */}
          <div className="sm:w-[32.71px] h-7">
            <img
              src="melon-right.png"
              alt="melon-right"
              className="h-full w-full"
            />
          </div>
        </div>

        {/* Actions Section */}
        {/* <div className="sm:w-[223.45px] mx-auto my-2 text-base sm:text-lg p-2"> */}
        <div className="mx-auto my-2 text-base sm:text-lg px-2">
          <div className="bg-neutral-700 cursor-pointer rounded-[51px] border text-center py-2 border-white w-full sm:h-[40.83px] sm:w-[223.45px] sm:mx-auto">
            Generate Referral Link
          </div>
          <div className="pt-2 sm:mx-auto sm:w-11/12">
            <label className="text-left pt-4" htmlFor="sol-address">
              Your SOL Address
            </label>
            <input
              id="sol-address"
              className="bg-neutral-700 rounded-[51px] w-full border p-2 border-white sm:h-[40.83px]"
            ></input>
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
