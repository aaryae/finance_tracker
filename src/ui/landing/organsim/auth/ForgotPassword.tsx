import video from "@assets/file.mp4";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

type ForgotPasswordForm = {
  email: string;
  password: string;
};

const forgotPasswordSchema = yup.object({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("New password is required")
    .min(6, "Password must be at least 6 characters"),
});

const ForgotPasswordPage = () => {
  //   const navigate = useNavigate();
  const [info, setInfo] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordForm>();

  const onSubmit: SubmitHandler<ForgotPasswordForm> = async (data) => {
    try {
      await forgotPasswordSchema.validate(data, { abortEarly: false });

      await axios.post(
        "http://localhost:9090/api/user/auth/forgot-password",
        data
      );
      setInfo("Verification email has been sent. Please check your inbox.");
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
        axiosError.response?.data?.message ||
          "Something went wrong. Please try again."
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

      <h1 className="uppercase text-6xl text-white py-10 text-center">
        <span className="text-5xl">Reset your</span> <br /> Finance password,
      </h1>

      <div className="relative z-10 flex flex-col items-center mt-10">
        <div className="w-full max-w-md mx-4">
          <h2 className="uppercase text-4xl font-semibold text-white mb-6 text-center">
            Forgot Password
          </h2>

          {info && (
            <p className="text-green-300 text-sm text-center mb-4">{info}</p>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-6"
          >
            {/* Email */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-white text-sm font-medium">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/80"
              />
              {errors.email && (
                <p className="text-red-400 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* New Password */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="password"
                className="text-white text-sm font-medium"
              >
                New Password <span className="text-red-600">*</span>
              </label>
              <input
                {...register("password")}
                id="password"
                type="password"
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
              {isSubmitting ? "Sending..." : "Send Verification Email"}
            </button>
          </form>

          <p className="text-sm text-white mt-4 text-center">
            Remembered your password?{" "}
            <Link to="/login" className="underline cursor-pointer">
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
