import video from "@assets/file.mp4";
import { Formtype } from "@type/form.type";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

// Yup schema
const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup.string().required("Password is required"),
});

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Formtype>();

  // Function to refresh access token
  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        throw new Error("No refresh token available");
      }

      const res = await axios.post(
        "http://localhost:9090/api/user/token/refreshToken",
        { refreshToken }
      );

      const newAccessToken = res.data?.token;
      if (newAccessToken) {
        localStorage.setItem("accessToken", newAccessToken);
        console.log("Access token refreshed");
      } else {
        throw new Error("Failed to obtain new access token");
      }
    } catch (error) {
      console.error("Error refreshing access token:", error);
      // Optionally, redirect to login page if refresh fails
      navigate("/login", { replace: true });
    }
  };

  // Set up interval to refresh token every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      refreshAccessToken();
    }, 50 * 60 * 1000); // 50 minutes

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const onSubmit: SubmitHandler<Formtype> = async (data) => {
    try {
      await loginSchema.validate(data, { abortEarly: false });

      const res = await axios.post(
        "http://localhost:9090/api/user/auth/sign-in",
        data
      );
      console.log(res)
      const userId = res.data?.userId;
      const refreshToken = res.data?.refreshToken;
      const accessToken = res.data?.token;
      const role = res.data?.role;

      localStorage.setItem("userId", userId);
      console.log(userId);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful!");
      if (role === "ADMIN") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
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
      alert(
        axiosError.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="relative w-full h-screen ">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-[50%] left-[50%] w-full  object-cover -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-60"
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
              <label
                htmlFor="password"
                className="text-white font-medium text-sm tracking-wide"
              >
                Password <span className="text-red-700">*</span>
              </label>
              <input
                {...register("password")}
                autoComplete="off"
                id="password"
                type="password"
                className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/80 transition"
              />
              {errors.password && (
                <p className="text-red-400 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="flex  -mt-2">
              <Link
                to="/forgot-password"
                className="text-white text-xs underline hover:text-gray-300 transition"
              >
                Forgot Password?
              </Link>
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
