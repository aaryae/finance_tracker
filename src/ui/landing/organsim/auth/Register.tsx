import video from "@assets/file.mp4";
import axios, { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await axios.post("http://localhost:9090/api/user/auth/sign-up", data);
      alert("Registration successful!");
      reset();
      navigate("/login");
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      console.error("Registration failed:", axiosError);
      alert(
        axiosError.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
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

      <h1 className="uppercase text-6xl text-white py-10 text-center">
        <span className="text-5xl">Create your</span> <br /> Finance tracker,
      </h1>

      <div className="relative z-10 flex flex-col items-center mt-12">
        <div className="w-full max-w-md mx-4">
          <h2 className="uppercase text-4xl font-semibold text-white mb-6 text-center">
            Register
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-6"
          >
            {/* First Name */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="firstname"
                className="text-white text-sm font-medium"
              >
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                {...register("firstname", {
                  required: "First name is required",
                })}
                type="text"
                id="firstname"
                placeholder="John"
                className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/80"
              />
              {errors.firstname && (
                <p className="text-red-400 text-xs">
                  {errors.firstname.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="lastname"
                className="text-white text-sm font-medium"
              >
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                {...register("lastname", { required: "Last name is required" })}
                type="text"
                id="lastname"
                placeholder="Doe"
                className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/80"
              />
              {errors.lastname && (
                <p className="text-red-400 text-xs">
                  {errors.lastname.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-white text-sm font-medium">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                type="email"
                id="email"
                placeholder="you@example.com"
                className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/80"
              />
              {errors.email && (
                <p className="text-red-400 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="password"
                className="text-white text-sm font-medium"
              >
                Password <span className="text-red-600">*</span>
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                id="password"
                placeholder="••••••••"
                className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/80"
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
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <p className="text-sm text-white mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="underline cursor-pointer">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
