import Cards from "./Cards";
import ProgressBar from "./ProgressBar";

const Form = () => {
  return (
    <div className="form p-4 w-[600px] h-[625.67px]">
      <div className="sm:w-10/12 sm:max-w-screen-sm mx-auto relative bg-gradient-to-b from-[#353535] to-black rounded-[39px] border-[3px] border-white  covered-by-your-grace-light">
        <div className="gif absolute -top-[200px] left-[50%] transform -translate-x-[50%] h-[246.26px] w-[246.26px] -z-10">
          <img
            src="/nigha-eating.gif"
            alt="left-hero-title"
            className="w-full h-full"
          />
        </div>
        <div className="title text-center text-6xl covered-by-your-grace-regular my-6">
          <h2>buy $nigachu</h2>
        </div>
        {/* TODO: Progress Section */}

        <ProgressBar percentage={30} />

        {/* Cards Button */}
        <Cards />

        {/* Buy Button */}
        <div
          className="mx-auto p-2 m-3 flex justify-center items-center gap-2 border border-[#ec5c5b]  cursor-pointer h-[46.51px] w-[283.65px]"
          style={{
            backgroundImage:
              "radial-gradient(circle at left, #9a2929 0%, black 70%)",
          }}
        >
          <div className="w-[32.71px] h-7">
            <img
              src="/melon-left.png"
              alt="melon-left"
              className="h-full w-full"
            />
          </div>
          <div className="w-[64.76px] h-[36.48px]">
            <img
              src="/buy-btn-text.png"
              alt="buy-btn-text"
              className="h-full w-full"
            />
          </div>
          {/* <div
            className="text-red-500 text-4xl w-[64.76px] h-[36.48px]"
            style={{ textShadow: "2px 0px 4px rgba(0, 255, 0, 1)" }}
          >
            Buy
          </div> */}
          <div className="w-[32.71px] h-7">
            <img
              src="/melon-right.png"
              alt="melon-right"
              className="h-full w-full"
            />
          </div>
        </div>

        {/* Actions Section */}
        <div className="w-[223.45px] mx-auto my-2 text-sm">
          <div className="bg-neutral-700 cursor-pointer rounded-[51px] border text-center py-2 border-white w-full h-[32.83px]">
            Generate Referral Link
          </div>
          <div className="pt-2">
            <label className="text-left pt-4" htmlFor="sol-address">
              Your SOL Address
            </label>
            <input
              id="sol-address"
              className="bg-neutral-700 rounded-[51px] w-full border p-2 border-white h-[32.83px]"
            ></input>
            <div className="text-center pt-1">Get 20% of token purchased</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
