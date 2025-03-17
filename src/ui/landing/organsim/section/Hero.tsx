import { image } from "@config/constant/image";
import Button from "@ui/landing/atom /Button";

const Hero = () => {
  return (
    <div className="flex justify-between px-20 bg-[#f8f5f1] pt-28">
      <div className=" flex flex-col justify-between items-start gap-8  h-full ">
        <h1
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="text-7xl   "
        >
          Personalized <br />
          Tracker
        </h1>
        <br />
        <p className="w-80 text-lg text-[#000000ea] text-justify">
          Tailored policies to protect what matters most to you. Let us help you
          find the perfect coverage for your needs.
          <br />
          <Button value="Get Started" />
        </p>
      </div>

      <div>
        <img className="md:w-[800px]" src={image.heroimage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
