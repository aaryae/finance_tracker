import video from "@assets/file.mp4";
import { Formtype } from "@type/form.type";
import axios, { AxiosError } from "axios";
import { Eye, EyeClosed } from "lucide-react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as yup from "yup";

// Schema
const loginSchema = yup.object({
  email: yup.string().required("Email is required").email("Invalid email format"),
  password: yup.string().required("Password is required"),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ added
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Formtype>();

  // ✅ Token Refresh Logic
  const refreshAccessToken = async () => {
    try {
      console.log("⏳ Running token refresh check...");
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) throw new Error("No refresh token available");

      const res = await axios.post(
        "http://localhost:9090/api/user/token/refreshToken",
        { refreshToken }
      );

      const newAccessToken = res.data?.token;
      if (newAccessToken) {
        localStorage.setItem("accessToken", newAccessToken);
        console.log("✅ Access token refreshed");
      } else {
        throw new Error("Failed to obtain new access token");
      }
    } catch (error) {
      console.error("❌ Error refreshing access token:", error);
      if (location.pathname !== "/login") {
        navigate("/login", { replace: true });
      }
    }
  };

  // ✅ Set interval for refreshing access token
  useEffect(() => {
    const interval = setInterval(() => {
      refreshAccessToken();
    }, 50 * 60 * 1000); // every 50 minutes
    return () => clearInterval(interval);
  }, []);

  const onSubmit: SubmitHandler<Formtype> = async (data) => {
    try {
      await loginSchema.validate(data, { abortEarly: false });

      const res = await axios.post("http://localhost:9090/api/user/auth/sign-in", data);

      const { userId, refreshToken, token: accessToken, role } = res.data;

      localStorage.setItem("userId", userId);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("role", role);

      navigate(role === "ADMIN" ? "/admin" : "/", { replace: true });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        for (const issue of err.inner) {
          if (issue.path === "email") {
            setError("email", { type: "manual", message: issue.message });
          } else if (issue.path === "password") {
            setError("password", { type: "manual", message: issue.message });
          }
        }
        return;
      }

      const axiosError = err as AxiosError<{ message: string }>;
      alert(axiosError.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-60"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="">
        <h1 className="uppercase text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-bold mb-4 leading-tight">
          <span className="block text-2xl sm:text-3xl md:text-4xl">Welcome to</span>
          Finance Tracker
        </h1>

        {/* Login Form */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 mx-auto mt-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6 uppercase">
            Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6">
            {/* Email */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-white font-medium text-sm">
                Email Address <span className="text-red-700">*</span>
              </label>
              <input
                {...register("email")}
                autoComplete="on"
                id="email"
                type="email"
                className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/80 transition"
              />
              {errors.email && (
                <p className="text-red-400 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className="text-white font-medium text-sm">
                Password <span className="text-red-700">*</span>
              </label>
              <div className="relative">
                <input
                  {...register("password")}
                  autoComplete="off"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="px-4 py-2 pr-10 w-full rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/80 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                >
                  {showPassword ? <EyeClosed /> : <Eye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs">{errors.password.message}</p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="text-right -mt-2">
              <Link
                to="/forgot-password"
                className="text-white text-xs underline hover:text-gray-300"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="text-sm text-white mt-4 text-center">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="underline hover:text-gray-300">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
