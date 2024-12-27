const Navbar = () => {
  return (
    <div
      className="w-full h-32 bg-cover bg-repeat-x sm:bg-contain bg-center flex items-center justify-between px-4 gap-4 relative z-50"
      style={{ backgroundImage: `url('/bar.png')` }}
    >
      {/* Add three images in a row */}
      <div>
        <img
          src="/nighachu-icon.png"
          alt="nighachu icon"
          className="w-[80%] h-auto object-contain"
        />
      </div>
      <div className="covered-by-your-grace-light text-5xl">
        {/* <img
          src="/presale.png"
          alt="presale"
          className="w-full h-auto object-contain"
        /> */}
        <span
          className="relative text-white text-8xl"
          style={{
            WebkitTextStroke: "2px #000",
          }}
        >
          PRESALE
        </span>
      </div>
      <div>
        {/* <img
          src="/nigachu-nav-right.png"
          alt="nigachu-nav-right"
          className="w-full h-auto object-contain"
        /> */}
        <span
          className="relative covered-by-your-grace-light text-white text-[64px]"
         style={{
            WebkitTextStroke: "2px #000",
          }}
        >
          nigachu
        </span>
      </div>
    </div>
  );
};

export default Navbar;
