import { image } from "@config/constant/image";

const Hero = () => {
  return (
    <div className="flex justify-between px-20">
      <div className=" flex flex-col justify-center ">
        <h1 className="text-5xl font-bold">
          Personalized <br />
          Tracker
        </h1>
        <p>
          Tailored policies to protect what matters most to you. Let us help you
          find the perfect coverage for your needs.
        </p>
        <button className="">Get Started</button>
      </div>
      <div>
        <img src={image.heroimage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
