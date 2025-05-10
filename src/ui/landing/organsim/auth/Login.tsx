import video from "@assets/file.mp4";
import axios, { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

type LoginFormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:9090/api/user/auth/sign-in",
        data
      );
      alert("Login successful!");
      navigate("/"); 
      console.log(res);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      alert(
        axiosError.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

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
        Your browser does not support the video tag.
      </video>

      <h1 className="uppercase text-8xl text-white py-10 text-center">
        <span className="text-5xl">Welcome to</span> <br /> Finance tracker,
      </h1>

      {/* Login Form */}
      <div className="relative z-10 flex flex-col items-center mt-12">
        <div className="w-full max-w-md mx-4">
          <h2 className="uppercase text-4xl font-semibold text-white mb-6 text-center">
            Login
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-6"
          >
            {/* Email */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="text-white font-medium text-sm tracking-wide"
              >
                Email Address <span className="text-red-700">*</span>
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                id="email"
                type="email"
                placeholder="you@example.com"
                className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/80 transition"
              />
              {errors.email && (
                <p className="text-red-400 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="password"
                className="text-white font-medium text-sm tracking-wide"
              >
                Password <span className="text-red-700">*</span>
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                id="password"
                type="password"
                placeholder="••••••••"
                className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/80 transition"
              />
              {errors.password && (
                <p className="text-red-400 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="text-sm text-white mt-4 text-center">
            Don't have an account?{" "}
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
