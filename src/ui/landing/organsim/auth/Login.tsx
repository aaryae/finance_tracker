import video from "@assets/file.mp4";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-[50%] left-[50%] w-full h-screen object-cover -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-60"
      >
        <source src={video} type="video/mp4" />
        sorry, video not supported
      </video>

      <h1 className="uppercase text-8xl text-[white] py-10  text-center">
        <span className="text-5xl"> Welome to</span> <br /> Finance tracker,
      </h1>
      {/* Login Form */}
      <div className="relative z-10 flex flex-col items-center justify-items-start mt-12">
        <div className="   w-full max-w-md mx-4">
          <h2 className="uppercase text-4xl font-semibold text-white mb-6 text-center">
            Login
          </h2>
          <form className="flex flex-col space-y-6 w-full max-w-md">
            {/* Email Field */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="text-white font-medium text-sm tracking-wide"
              >
                Email Address <span className="text-red-700">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/80 transition"
                required
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="password"
                className="text-white font-medium text-sm tracking-wide"
              >
                Password <span className="text-red-700">*</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/80 transition"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-white mt-4 text-center">
            Don't have an account?
            <Link to="/register" className="underline cursor-pointer">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
