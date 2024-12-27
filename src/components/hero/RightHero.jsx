import Form from "../right-section/Form";

const RightHero = () => {
  return (
    <div className="right-section relative flex flex-col justify-center items-center h-full w-full mt-52">
      <div className="absolute !-top-24 !right-8 z-10 pointer-events-none hidden sm:block rotate-animation">
        <div>
          <img src="/light.png" alt="light" />
        </div>
        <div className="absolute -top-40 right-0 z-10">
          <img src="/light-source.png" alt="light-source" />
        </div>
      </div>

      <Form />
    </div>
  );
};

export default RightHero;