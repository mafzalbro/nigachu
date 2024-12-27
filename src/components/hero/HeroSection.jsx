import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

const HeroSection = () => {
  return (
    <div className="flex justify-evenly items-center sm:gap-36 md:h-screen flex-col md:flex-row relative z-40">
      <LeftHero />
      <RightHero />
    </div>
  );
};

export default HeroSection;
