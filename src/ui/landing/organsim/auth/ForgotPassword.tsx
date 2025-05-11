import axios, { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

// Define form type
type ForgotPasswordForm = {
  email: string;
  password: string;
};

// Yup schema
const forgotPasswordSchema = yup.object({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("New password is required")
    .min(6, "At least 6 characters"),
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

      const response = await axios.post(
        "http://localhost:9090/api/user/auth/forgot-password",
        data
      );
      console.log(response);
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
        axiosError.response?.data?.message || "Something went wrong. Try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Forgot Password
        </h2>

        {info && (
          <p className="text-green-600 text-sm text-center mb-4">{info}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="you@example.com"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* New Password */}
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              placeholder="New secure password"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Reset Email"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Back to{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
