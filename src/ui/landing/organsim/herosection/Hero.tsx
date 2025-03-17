import { image } from "@config/constant/image";

const Hero = () => {
  return (
    <div className="flex justify-between">
      <div className=" ">
        <h1>Personalized Tracker</h1>
        <button>Get Started</button>
      </div>
      <div>
        <img src={image.heroimage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
